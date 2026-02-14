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
  private selectedList = signal<TaskStatus | undefined>(undefined);
  listKeys = signal<TaskStatus[]>([]);

  groupedTasks = computed(() => {
    const tasks = this.tasks();
    const selectedStatus = this.selectedList();
    return tasks.reduce(
      (group, task) => {
        const status = task.status;
        if (selectedStatus && task.status !== selectedStatus) {
          return group;
        }

        if (!group[status]) {
          group[status] = [];
        }

        group[status].push(task);

        return group;
      },
      {} as Record<TaskStatus, Task[]>,
    );
  });

  groupKeys = computed(() => Object.keys(this.groupedTasks()) as TaskStatus[]);

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks.set(tasks.tasks);
      this.listKeys.set([...new Set(tasks.tasks.map((t) => t.status))]);
    });
  }

  onTaskListSelect(status?: TaskStatus) {
    this.selectedList.set(status);
  }
}
