import { List } from '../../projects/ui-components/src/lib/list/list';
import { Card } from './../../projects/ui-components/src/lib/card/card';
import { Component, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  imports: [ButtonModule, Card, List],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('task-management-dashboard');
}
