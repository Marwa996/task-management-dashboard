import { Statistic } from '../entities/statistics.model';

export interface StatisticsResponse {
  statistics: Statistic[];
  lastUpdated: string;
}
