import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Card } from 'primeng/card';

@Component({
  selector: 'app-dashboard-statistics',
  imports: [Card, CommonModule],
  templateUrl: './statistics.html',
  styleUrl: './statistics.scss',
})
export class Statistics {
  // TODO: interface implementation for items
  items = [
    {
      title: '📊 Total Tasks',
      count: 50,
      statics: '+12 this week',
      classes: 'up-stats',
    },
    {
      title: '✅ Completed',
      count: 50,
      statics: '+8 today',
      classes: 'up-stats',
    },
    {
      title: '🔄 In Progress',
      count: 50,
      statics: 'same as yesterday',
      classes: 'normal-stats',
    },
    {
      title: '⚠️ Overdue',
      count: 50,
      statics: '+13 today',
      classes: 'down-stats',
    },
  ];
}
