import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NegozioPage } from './pages/negozio.page';
import { CarrelloPage } from './pages/carrello.page';
import { CarrelloDetailsPage } from './pages/carrello-details.page';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

const routes: Route[] = [
  {
    path: '',
    component: NegozioPage,
  },
  {
    path: 'carrello',
    component: CarrelloPage,
  },
  {
    path: 'details',
    component: CarrelloDetailsPage,
  }
];
@NgModule({
  declarations: [
    AppComponent,
    NegozioPage,
    CarrelloPage,
    CarrelloDetailsPage,
    NavbarComponent
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
