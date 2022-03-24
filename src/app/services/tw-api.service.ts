import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TwApiService {
  api_url = 'http://localhost:3000?';

  constructor(private http: HttpClient) {}
  getTweets(query: string, count: number) {
    return this.http.get<any>(`${this.api_url}q=${query}&count=${count}`);
  }
}
