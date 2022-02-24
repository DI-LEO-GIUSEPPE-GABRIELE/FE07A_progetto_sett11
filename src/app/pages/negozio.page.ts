import { Component, OnInit } from '@angular/core';
import * as Servizi from '../store.service';
import { Articolo } from '../models/articolo';
import { HttpClient } from '@angular/common/http';
import { Subscriber } from 'rxjs';
@Component({
  template: `
      <p *ngIf ='isLoading'>loading</p>
      <div class="card-body rounded mb-5">
      <div class="card text-center justify-content-around">
        <div *ngFor="let articolo of articoliNegozio">
          <h5>{{articolo.id}}</h5>
            <h5 class="card-title">{{articolo.name}}</h5>
            <p class="card-text">{{articolo.description}} <br> {{articolo.price | currency : 'EUR'}}</p>
           <div class="card-footer"> <button type="button" class="btn btn-dark" [routerLink]="['/details', articolo]">Dettagli</button></div>
          </div>
      </div>
  `,
  styles: [
    `
    * {
      text-shadow: 5px 5px 10px black;
      font-size: 1.1em;
    }
    .card {
      width:30em;
      height: 50em;
      background-color:#ffffff3b;
      color:white;
    }
    `
  ]
})
export class NegozioPage implements OnInit {
  articoliNegozio: Articolo[] = [];
  isLoading = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.isLoading = true;
    setInterval(() => {
      if (this.articoliNegozio != []) {
        this.isLoading = false;
      }
      this.articoliNegozio = Servizi.articoli;
    }, 20)
  }
}
