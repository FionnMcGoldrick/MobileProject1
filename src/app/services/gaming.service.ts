import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GamingService {
  private apiKey = 'b4abdff1bda64f898a54686eb99ca861';
  private apiUrl = 'https://api.rawg.io/api';

  constructor(private http: HttpClient) { }

  getGames() {
    return this.http.get(`${this.apiUrl}?apiKey=${this.apiKey}`);
  }
}
