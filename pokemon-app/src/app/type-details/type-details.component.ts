import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-type-details',
  templateUrl: './type-details.component.html',
  styleUrls: ['./type-details.component.css']
})
export class TypeDetailsComponent implements OnInit {
  typeDetails: any;
  typeName: string = '';

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const typeName = params.get('type') || '';
      this.pokemonService.getTypeDetails(typeName).subscribe({
        next: (data) => {
          console.log('Type Details:', data); // Debug
          this.typeDetails = data;
        },
      });
    });
  }
  
}
