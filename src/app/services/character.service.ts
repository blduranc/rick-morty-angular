import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private apiUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  searchCharacters(name: string, status: string): Observable<any> {

    let url = `${this.apiUrl}?name=${name}`;

    if (status !== 'all') {
      url += `&status=${status}`;
    }

    return this.http.get<any>(url);
  }
}