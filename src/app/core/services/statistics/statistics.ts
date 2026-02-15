import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIService } from '../api/api.service';
import { StatisticsResponse } from '../../models/responses/statistics-response.model';

@Injectable({
  providedIn: 'root',
})
export class StatisticsService {
  private apiUrl = '/data-fetching';
  private apiService = inject(APIService);

  getStatistics(): Observable<StatisticsResponse> {
    return this.apiService.get<StatisticsResponse>(this.apiUrl + '/statistics.json');
  }
}
