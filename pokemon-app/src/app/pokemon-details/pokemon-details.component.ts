import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {
  pokemonId: string = '';
  pokemon: any;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    // Recupera l'ID dal parametro della rotta
    this.route.paramMap.subscribe(params => {
      this.pokemonId = params.get('id') || '';
      console.log('Pokemon ID:', this.pokemonId); // Debug
      this.loadPokemonDetails();
    });
  }

  loadPokemonDetails(): void {
    this.pokemonService.getPokemonById(this.pokemonId).subscribe({
      next: (data) => {
        console.log('Pokemon Details:', data);
        this.pokemon = data;
      },
      error: (err) => {
        console.error('Error fetching Pokemon details:', err);
      }
    });
  }
}
