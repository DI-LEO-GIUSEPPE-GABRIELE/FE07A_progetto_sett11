import { Component, OnInit } from '@angular/core';
import { Articolo } from '../models/articolo';
import * as Servizi from '../store.service';
import { ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  template: `
<div class="mb-4" *ngFor="let articolo of articoliCarrello">
  <p class="text-center">Articolo: {{articolo.id}}, {{articolo.name}}, {{articolo.description}}. Prezzo: {{articolo.price | currency : 'EUR'}}</p>
</div>

    <div class="container text-center">
      <h1 class="mb-5">Completa l'ordine</h1>
      <form class="rounded" (ngSubmit)="submit()" #f="ngForm">
          <div ngModelGroup="userInfo">
            <div class="form-group">
              <label for="name">Nome</label>
              <input class="form-control" ngModel name="nome" type="text" required #name="ngModel">
              <p class="text-danger bg-dark" *ngIf="name.invalid">* Campo richiesto! *</p>
              <label for="indirizzo">Indirizzo</label>
              <input class="form-control" ngModel name="indirizzo" type="text" required #indirizzo="ngModel">
              <p class="text-danger bg-dark" *ngIf="indirizzo.invalid">* Campo richiesto! *</p>
              <input type="submit" [disabled]="f.invalid" value="invia" class="btn btn-dark text-white mt-2 mx-4">
            </div>
          </div>
      </form>
      <button (click)="svuotaCarrello()" class="btn btn-dark text-white mt-2">Svuota il Carrello</button>
    </div>
  `,
  styles: [`
    p {
      background-color:#ffffff3b;
    }
    h1 {
      font-size: 3em;
    }
    * {
      text-shadow: 5px 5px 10px black;
      font-size: 1.1em;
      color:white;
    }
    input {
      color:black;
    }
    form {
      width: 25em;
      margin: 0 auto;
      background-color:#ffffff3b;
      padding: 1em;
    }
     input.ng-invalid.ng-touched {
      border:3px solid red;
    }
    `],
})
export class CarrelloPage implements OnInit {
  articoliCarrello: Articolo[] = Servizi.carrello;
  @ViewChild("f", { static: true }) form!: NgForm;
  user: any = {};

  submit() {
    console.log('form inviato', this.form);
    this.user.nome = this.form.value.userInfo.nome;
    this.user.indirizzo = this.form.value.userInfo.indirizzo;
    let riepilogo = [];
    let totalePrezzi: number = 0;
    for (let i of this.articoliCarrello) {
      riepilogo.push(i.name);
      totalePrezzi += Number(i.price);
    }
    alert('Ricevuta d\'acquisto \n' + 'Numero Ordine: ' + Math.floor(Math.random() * 1000) + '\n' + 'Nome: ' + this.user.nome + '\n' + 'Indirizzo: ' + this.user.indirizzo + '\n' + 'Articoli: ' + riepilogo + '\n' + 'Totale speso: € ' + totalePrezzi)
    Servizi.carrello.length = 0;
    this.form.reset()
  }

  svuotaCarrello() {
    return Servizi.carrello.length = 0;
  }

  constructor() { }

  ngOnInit(): void {

  }
}
