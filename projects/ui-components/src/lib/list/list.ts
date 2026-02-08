import { ButtonModule } from 'primeng/button';
import { Component, Input, OnInit } from '@angular/core';
import { CardDetails } from '../../../../models/src/lib/models/card-details.model';
import { DividerModule } from 'primeng/divider';
import { TagModule } from 'primeng/tag';
import { Priority, Status } from '../../../../models/src/lib/enums';
import { Card } from '../card/card';

@Component({
  selector: 'lib-list',
  imports: [ButtonModule, DividerModule, TagModule, Card],
  templateUrl: './list.html',
  styleUrl: './list.scss',
})
export class List implements OnInit {
  @Input() header!: string;
  @Input() tasks!: CardDetails[];

  ngOnInit(): void {
    this.tasks = [
      {
        header: 'Task 1',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam',
        status: Status.IN_PROGRESS,
        priority: Priority.HIGH,
        dueDate: new Date(),
        assignee: 'John Doe',
      },
      {
        header: 'Task 2',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam',
        status: Status.DONE,
        priority: Priority.LOW,
        dueDate: new Date(),
        assignee: 'Jane Doe',
      },
    ];
  }
}
