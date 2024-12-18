import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  types: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadPokemonTypes();
  }

  loadPokemonTypes(): void {
    this.http.get<any>('https://pokeapi.co/api/v2/type').subscribe({
      next: (data) => {
        this.types = data.results;
      },
      error: (err) => {
        console.error('Errore durante il recupero dei tipi:', err);
      }
    });
  }
}
