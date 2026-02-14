import { Component, inject, input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { Task } from '../../../core/models';
import { TaskPriorityService } from '../../../shared/services/task-priority/task-priority.service';
import { TaskPrioritySeverity } from '../../../core/types';
import { CommonModule } from '@angular/common';
import { TaskPriorityPipe } from '../../../shared/pipes/task-priority/task-priority-pipe';
import { TaskDueDatePipe } from '../../../shared/pipes/task-due-date/task-due-date-pipe';
import { TaskCompleteDatePipe } from '../../../shared/pipes/task-complete-date/task-complete-date-pipe';
import { TaskAssigneeNamePipe } from '../../../shared/pipes/task-assignee-name/task-assignee-name-pipe';

@Component({
  selector: 'app-task-card',
  imports: [
    CommonModule,
    CardModule,
    TagModule,
    ButtonModule,
    TaskPriorityPipe,
    TaskDueDatePipe,
    TaskCompleteDatePipe,
    TaskAssigneeNamePipe,
  ],
  templateUrl: './task-card.html',
  styleUrl: './task-card.scss',
})
export class TaskCard {
  taskPriorityService = inject(TaskPriorityService);
  task = input.required<Task>();

  get severity(): TaskPrioritySeverity {
    return this.taskPriorityService.getSeverity(this.task().priority);
  }
}
