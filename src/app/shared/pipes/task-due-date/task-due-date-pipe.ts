import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taskDueDate',
})
export class TaskDueDatePipe implements PipeTransform {
  transform(dueDate: string, isOverdue?: boolean): string {
    const dueDateObj = new Date(dueDate);
    const now = new Date();
    let timeDiff = 0;
    let daysDiff = 0;

    // Logic to calculate time difference
    if (isOverdue) {
      timeDiff = now.getTime() - dueDateObj.getTime();
      daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    } else {
      timeDiff = dueDateObj.getTime() - now.getTime();
      daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    }

    if (daysDiff === 0) return '📅 Due today';

    // Logic to convert daysDiff to a more human-readable format
    let daysDiffLabel = '';

    if (daysDiff < 7) daysDiffLabel = `${daysDiff} day${daysDiff > 1 ? 's' : ''}`;
    if (daysDiff < 30)
      daysDiffLabel = `${Math.ceil(daysDiff / 7)} week${Math.ceil(daysDiff / 7) > 1 ? 's' : ''}`;

    if (isOverdue) return '⚠️ Overdue by ' + daysDiffLabel;
    else return '📅 Due in ' + daysDiffLabel;
  }
}
