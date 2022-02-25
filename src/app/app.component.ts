import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as Servizi from './app.service';

@Component({
  selector: 'app-root',
  template: `
    <app-navbar></app-navbar>
    <div id="body"><router-outlet></router-outlet></div>
  `,
  styles: [`
  #body{
    height: 65em;
    background: url('../img/sfondo1.jpg');
  }
  `],
})

export class AppComponent {
  title = 'FE07A_progetto_sett11';
  loading: boolean = false;

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    Servizi.loadArticoli(this.http);
  }
}

