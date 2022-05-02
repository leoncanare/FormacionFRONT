import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EjerciciosAngularModule } from './ejercicios-angular/ejercicios-angular.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EjerciciosAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
