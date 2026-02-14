import { Pipe, PipeTransform } from '@angular/core';
import { TaskStatus } from '../../../core/types';

@Pipe({
  name: 'taskStatus',
})
export class TaskStatusPipe implements PipeTransform {
  transform(value?: TaskStatus): string {
    switch (value) {
      case 'todo':
        return 'TO DO';
      case 'in_progress':
        return 'IN PROGRESS';
      case 'done':
        return 'DONE';
      default:
        return value ? (value as string).toUpperCase() : 'All';
    }
  }
}
