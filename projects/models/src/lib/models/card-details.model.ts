import { Priority, Status } from '../enums';

export interface CardDetails {
  header: string;
  description: string;
  priority: Priority;
  status: Status;
  dueDate: Date;
  assignee: string;
}
