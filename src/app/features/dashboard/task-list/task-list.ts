import { ButtonModule } from 'primeng/button';
import { Component, computed, input, OnInit } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { TagModule } from 'primeng/tag';
import { Task } from '../../../core/models';
import { TaskCard } from '../task-card/task-card';

@Component({
  selector: 'app-dashboard-task-list',
  imports: [ButtonModule, DividerModule, TagModule, TaskCard],
  templateUrl: './task-list.html',
  styleUrl: './task-list.scss',
})
export class TaskList implements OnInit {
  header = input.required<string>();
  tasks = input.required<Task[]>();

  label = computed(() => `${this.header} (${this.tasksCount()})`);
  tasksCount = computed(() => this.tasks().length.toString());

  ngOnInit(): void {}
}
