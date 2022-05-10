import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

import { AppRouterModule } from './app-router.module';

//Cambiar el locale de la app 
//[INFO] Importamos el Modulo  en el que angular contiene la data d nuetra ubicación elegida y la cragamos en una funcion que despues nombramos con nuestro lugar seleccionado.
import localEs from '@angular/common/locales/es';
import localFr from '@angular/common/locales/fr';

import { registerLocaleData } from '@angular/common'
registerLocaleData( localEs );
registerLocaleData( localFr );

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRouterModule,
    VentasModule
  ],
  //[INFO] Desde los provaiders establecemos por defecto que localID utilizamos en nuestro caso el es.
  providers: [
    { provide: LOCALE_ID, useValue: 'es' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
