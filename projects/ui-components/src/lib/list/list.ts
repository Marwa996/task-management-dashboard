import { ButtonModule } from 'primeng/button';
import { Component, Input } from '@angular/core';
import { CardDetails } from '../../../../models/src/lib/models/card-details.model';
import { Card } from 'primeng/card';

@Component({
  selector: 'lib-list',
  imports: [Card, ButtonModule],
  templateUrl: './list.html',
  styleUrl: './list.scss',
})
export class List {
  @Input() header!: string;
  @Input() tasks!: CardDetails[];
}
