import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  private apiUrl = environment.apiUrl;

  private readonly httpClient = inject(HttpClient);
  private readonly headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });
  get<T>(url: string, headers?: HttpHeaders): Observable<T> {
    return this.httpClient.get<T>(this.apiUrl + url, {
      headers: headers ? headers : this.headers,
    });
  }

  post<TOut>(url: string, body: unknown, headers?: HttpHeaders): Observable<TOut> {
    return this.httpClient.post<TOut>(this.apiUrl + url, body, {
      headers: headers ? headers : this.headers,
    });
  }

  put<TOut>(url: string, body: unknown, headers?: HttpHeaders): Observable<TOut> {
    return this.httpClient.put<TOut>(this.apiUrl + url, body, {
      headers: headers ? headers : this.headers,
    });
  }

  patch<TOut>(url: string, body: unknown, headers?: HttpHeaders): Observable<TOut> {
    return this.httpClient.patch<TOut>(this.apiUrl + url, body, {
      headers: headers ? headers : this.headers,
    });
  }

  delete<T>(url: string, headers?: HttpHeaders): Observable<T> {
    return this.httpClient.delete<T>(this.apiUrl + url, {
      headers: headers ? headers : this.headers,
    });
  }
}
