import { Component, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Layout } from './layout/layout';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ButtonModule, Layout, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('task-management-dashboard');
}
