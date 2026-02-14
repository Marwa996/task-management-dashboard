import { ButtonModule } from 'primeng/button';
import { Component, computed, input, OnInit } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { TagModule } from 'primeng/tag';
import { Task } from '../../../core/models';
import { TaskCard } from '../task-card/task-card';
import { TaskStatusPipe } from '../../../shared/pipes/task-status/task-status-pipe';

@Component({
  selector: 'app-dashboard-task-list',
  imports: [ButtonModule, DividerModule, TagModule, TaskCard, TaskStatusPipe],
  templateUrl: './task-list.html',
  styleUrl: './task-list.scss',
})
export class TaskList implements OnInit {
  tasks = input.required<Task[]>();
  tasksCount = computed(() => this.tasks().length.toString());

  ngOnInit(): void {}
}
