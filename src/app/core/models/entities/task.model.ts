import { TaskPriority, TaskStatus } from '../../types';
import { Assignee } from './assignee.model';

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate: string;
  isOverdue: boolean;
  completedAt?: string;
  assignee: Assignee;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}
