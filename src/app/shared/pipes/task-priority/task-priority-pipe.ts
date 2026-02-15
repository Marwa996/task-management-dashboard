import { Pipe, PipeTransform } from '@angular/core';
import { TaskPriority } from '../../../core/types';

@Pipe({
  name: 'taskPriority',
})
export class TaskPriorityPipe implements PipeTransform {
  transform(value: TaskPriority): string {
    return value.toUpperCase();
  }
}
