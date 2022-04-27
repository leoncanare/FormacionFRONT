import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';

import { DbzService } from './services/dbz.service';

@NgModule({
//[INFO] Declaramos todos los componentes de nuestra app-mainpage.
  declarations: [
    MainPageComponent,
    PersonajesComponent,
    AgregarComponent
  ],
//[INFO] Componente que queremos mostrar en el html general por eso exportamos.
  exports: [
    MainPageComponent
  ],
//[INFO] Modulos que utilizamos para la composicion de nuestra app-dbz.
  imports: [
    CommonModule,
    FormsModule
  ],
//[INFO] Se refiere a los servicios que utilzamos en nuestra app.
  providers: [
    DbzService
  ]
})
//[INFO] Exportamos nuestra clase para asi poder llamarla desde el app.module
export class DbzModule { }
