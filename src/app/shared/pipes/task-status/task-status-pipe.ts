import { Pipe, PipeTransform } from '@angular/core';
import { TaskStatus } from '../../../core/types';

@Pipe({
  name: 'taskStatus',
})
export class TaskStatusPipe implements PipeTransform {
  transform(value?: TaskStatus): string {
    switch (value) {
      case 'todo':
        return 'To Do';
      case 'in_progress':
        return 'In Progress';
      case 'done':
        return 'Done';
      default:
        return value ? (value as string).toUpperCase() : 'All';
    }
  }
}
