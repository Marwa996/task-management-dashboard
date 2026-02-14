import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { TaskMenubar } from './task-menubar/task-menubar';
import { TaskService } from '../../core/services/task/task';
import { Task } from '../../core/models';
import { TaskList } from './task-list/task-list';
import { TaskStatus } from '../../core/types';
import { Statistics } from './statistics/statistics';

@Component({
  selector: 'app-dashboard',
  imports: [TaskMenubar, TaskList, Statistics],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard implements OnInit {
  private taskService = inject(TaskService);
  private tasks = signal<Task[]>([]);
  private selectedList = signal<TaskStatus | null>(null);

  groupedTasks = computed(() => {
    const tasks = this.tasks();
    const selectedStatus = this.selectedList();

    return tasks.reduce(
      (groups, task) => {
        if (selectedStatus && task.status !== selectedStatus) {
          return groups;
        }

        const header = this.getListHeader(task.status);

        if (!groups[header]) {
          groups[header] = [];
        }

        groups[header].push(task);

        return groups;
      },
      {} as Record<string, Task[]>,
    );
  });

  availableTaskLists = computed(() => {
    return this.tasks().reduce(
      (lists, task) => {
        const status = task.status;
        const header = this.getListHeader(status);
        if (!lists[status]) {
          lists[status] = header;
        }
        return lists;
      },
      {} as Record<TaskStatus, string>,
    );
  });

  groupKeys = computed(() => Object.keys(this.groupedTasks()));

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks.set(tasks.tasks);
    });
  }

  private getListHeader(status: TaskStatus): string {
    switch (status) {
      case 'todo':
        return 'TO DO';
      case 'in_progress':
        return 'IN PROGRESS';
      case 'done':
        return 'DONE';
      default:
        return (status as string).toUpperCase();
    }
  }

  onTaskListSelect(status: TaskStatus | null) {
    this.selectedList.set(status);
  }
}
