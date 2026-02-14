import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ButtonDirective } from 'primeng/button';

@Component({
  selector: 'app-layout-sidebar',
  imports: [ButtonDirective, RouterModule, CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  menuItems: MenuItem[] = [
    { label: '📊 Dashboard', routerLink: '/dashboard' },
    { label: '✅ Tasks', routerLink: '/tasks' },
    { label: '📅 Calendar', routerLink: '/calendar' },
    { label: '📈 Analytics', routerLink: '/analytics' },
    { label: '👥 Team', routerLink: '/team' },
    { label: '⚙️ Settings', routerLink: '/settings' },
  ];
}
