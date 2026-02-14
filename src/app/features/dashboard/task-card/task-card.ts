import { Component, inject, input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { Task } from '../../../core/models';
import { TaskPriorityService } from '../../../shared/services/task-priority/task-priority.service';
import { TaskPrioritySeverity } from '../../../core/types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-card',
  imports: [CommonModule, CardModule, TagModule, ButtonModule],
  templateUrl: './task-card.html',
  styleUrl: './task-card.scss',
})
export class TaskCard {
  taskPriorityService = inject(TaskPriorityService);
  task = input.required<Task>();

  get severity(): TaskPrioritySeverity {
    return this.taskPriorityService.getSeverity(this.task().priority);
  }

  get priorityLabel(): string {
    return this.taskPriorityService.getPriorityLabel(this.task().priority);
  }

  get assigneeFirstName(): string {
    return `@` + this.task().assignee.name.split(' ')[0];
  }

  get dueDate(): string {
    return this.taskPriorityService.getDueDateLabel(this.task().dueDate, this.task().isOverdue);
  }

  get completedAt(): string {
    return this.taskPriorityService.getCompletedAtLabel(this.task().completedAt);
  }
}
