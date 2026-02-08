import { CardDetails } from './../../../../models/src/lib/models/card-details.model';
import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'lib-card',
  imports: [CardModule],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  @Input() header!: string;
  @Input() priority!: string;
  @Input() description!: string;
  @Input() status!: string;
  @Input() dueDate!: string;
  @Input() assignee!: string;
  @Input() tags!: string[];

  @Input() cardDetails?: CardDetails;
}
