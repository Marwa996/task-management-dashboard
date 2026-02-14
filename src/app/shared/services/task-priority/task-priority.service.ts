import { Injectable } from '@angular/core';
import { TaskPriority, TaskPrioritySeverity } from '../../../core/types';

@Injectable({
  providedIn: 'root',
})
export class TaskPriorityService {
  getSeverity(severity: TaskPriority): TaskPrioritySeverity {
    // Logic to set task severity
    switch (severity) {
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

  getPriorityLabel(priority: TaskPriority): string {
    switch (priority) {
      case 'low':
        return 'Low';
      case 'medium':
        return 'Medium';
      case 'high':
        return 'High';
      default:
        return 'Low';
    }
  }

  getDueDateLabel(dueDate: string, isOverdue?: boolean): string {
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

  getCompletedAtLabel(completedAt?: string): string {
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
