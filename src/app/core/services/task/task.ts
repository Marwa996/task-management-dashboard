import { HttpClient } from '@angular/common/http';
import { inject, Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIService } from '../api/api.service';
import { Task, TasksResponse } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = '/data-fetching';
  private apiService = inject(APIService);
  getTasks(): Observable<TasksResponse> {
    return this.apiService.get<TasksResponse>(this.apiUrl + '/tasks.json');
  }
}
