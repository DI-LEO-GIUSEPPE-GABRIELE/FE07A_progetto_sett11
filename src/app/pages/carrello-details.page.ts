import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Articolo } from '../models/articolo';
import * as Servizi from '../store.service';

@Component({
  template: `
    <div *ngIf="articolo" class="card-body rounded text-center mx-5">
      <h5 class="card-title">{{ articolo.name }}</h5>
      <p class="card-text">
        {{ articolo.description }} <br />
        {{ articolo.price | currency: 'EUR' }}
      </p>
      <div class="card-footer mt-5">
        <button type="button" class="btn btn-dark" (click)="aggiungi()">
          Aggiungi al carrello
        </button>
      </div>
    </div>
  `,
  styles: [
    `
    * {
      text-shadow: 5px 5px 10px black;
      font-size: 1.2em;
    }
    .card-body {
      width:30em;
      height: 15em;
      background-color:#ffffff3b;
      color:white;
    }
    `
  ]
})
export class CarrelloDetailsPage implements OnInit {
  articolo!: Articolo;
  sub!: Subscription;

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.router.params.subscribe((params: Params) => {
      this.articolo = <Articolo>params;
      console.log(this.articolo);
      console.log(params);
    });
  }

  aggiungi() {
    Servizi.aggiungiAlCarrello(this.articolo);
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.sub.unsubscribe();
  }
}
