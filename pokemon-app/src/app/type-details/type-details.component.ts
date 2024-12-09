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
      this.typeName = params.get('type') || '';
      if (this.typeName) {
        this.pokemonService.getTypeDetails(this.typeName).subscribe(data => {
          this.typeDetails = data;
        });
      }
    });
  }
}
