import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {
  pokemon: any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.loadPokemonDetails();
  }

  loadPokemonDetails(): void {
    this.route.paramMap.subscribe(params => {
      const pokemonId = params.get('id') || '';
      this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).subscribe({
        next: (data) => {
          this.pokemon = data;
        },
        error: (err) => {
          console.error('Errore durante il recupero dei dettagli del Pokémon:', err);
        }
      });
    });
  }
}
