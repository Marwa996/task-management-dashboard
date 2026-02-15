import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { Card } from 'primeng/card';
import { StatisticsService } from '../../../core/services/statistics/statistics';
import { Statistic } from '../../../core/models';
import { StatisticsChangeLabelPipe } from '../../../shared/pipes/statistics-change-label/statistics-change-label-pipe';

@Component({
  selector: 'app-dashboard-statistics',
  imports: [Card, CommonModule, StatisticsChangeLabelPipe],
  templateUrl: './statistics.html',
  styleUrl: './statistics.scss',
})
export class Statistics implements OnInit {
  statistics = signal<Statistic[]>([]);
  private statisticsService = inject(StatisticsService);
  ngOnInit(): void {
    this.statisticsService.getStatistics().subscribe((res) => {
      this.statistics.set(res.statistics);
    });
  }
}
