import { Component } from '@angular/core';
import { LayoutToolbar } from './toolbar/toolbar';
import { Sidebar } from './sidebar/sidebar';

@Component({
  selector: 'app-layout',
  imports: [LayoutToolbar, Sidebar],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {}
