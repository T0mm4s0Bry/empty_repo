import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-type-details',
  templateUrl: './type-details.component.html',
  styleUrls: ['./type-details.component.css']
})
export class TypeDetailsComponent implements OnInit {
  typeDetails: any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.loadTypeDetails();
  }

  loadTypeDetails(): void {
    this.route.paramMap.subscribe(params => {
      const typeName = params.get('type') || '';
      this.http.get<any>(`https://pokeapi.co/api/v2/type/${typeName}`).subscribe({
        next: (data) => {
          this.typeDetails = data;
        },
        error: (err) => {
          console.error('Errore durante il recupero dei dettagli del tipo:', err);
        }
      });
    });
  }
}
