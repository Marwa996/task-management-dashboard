import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taskAssigneeName',
})
export class TaskAssigneeNamePipe implements PipeTransform {
  transform(value: string): string {
    return `@` + value.split(' ')[0];
  }
}
