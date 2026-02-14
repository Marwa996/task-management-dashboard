import { Pipe, PipeTransform } from '@angular/core';
import { TaskPriority, TaskPrioritySeverity } from '../../../core/types';

@Pipe({
  name: 'taskSeverity',
})
export class TaskSeverityPipe implements PipeTransform {
  transform(value: TaskPriority): TaskPrioritySeverity {
    switch (value) {
      case 'low':
        return 'secondary';
      case 'medium':
        return 'warn';
      case 'high':
        return 'danger';
      default:
        return 'secondary';
    }
  }
}
