import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taskCompleteDate',
})
export class TaskCompleteDatePipe implements PipeTransform {
  transform(completedAt?: string): string {
    if (!completedAt) return '';
    const completedAtDate = new Date(completedAt);
    const now = new Date();
    const timeDiff = now.getTime() - completedAtDate.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    if (daysDiff === 0) return '✅ Completed today';
    if (daysDiff < 7) return `✅ Completed ${daysDiff} day${daysDiff > 1 ? 's' : ''} ago`;
    if (daysDiff < 30)
      return `✅ Completed ${Math.ceil(daysDiff / 7)} week${Math.ceil(daysDiff / 7) > 1 ? 's' : ''} ago`;
    return `✅ Completed on ${completedAtDate.toLocaleDateString()}`;
  }
}
