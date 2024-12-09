import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  getTypes(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/type`);
  }

  getTypeDetails(typeName: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/type/${typeName}`);
  }

  getPokemonById(id: string | number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/pokemon/${id}`);
  }
}
