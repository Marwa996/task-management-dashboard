import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: Dashboard,
  },
  {
    path: 'tasks',
    loadComponent: () => import('./features/tasks/tasks').then((c) => c.Tasks),
  },
  {
    path: 'team',
    loadComponent: () => import('./features/team/team').then((c) => c.Team),
  },
  {
    path: 'analytics',
    loadComponent: () => import('./features/analytics/analytics').then((c) => c.Analytics),
  },
  {
    path: 'calendar',
    loadComponent: () => import('./features/calendar/calendar').then((c) => c.Calendar),
  },
  {
    path: 'settings',
    loadComponent: () => import('./features/settings/settings').then((c) => c.Settings),
  },
];
