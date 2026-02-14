import { Task } from '../entities/task.model';

export interface TasksResponse {
  tasks: Task[];
  meta: {
    totalCount: number;
    lastUpdated: string;
  };
}
