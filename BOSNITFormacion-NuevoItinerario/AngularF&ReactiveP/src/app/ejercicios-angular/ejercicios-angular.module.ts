import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageComponent } from './main-page/main-page.component';
import { DisplayHideComponent } from './display-hide/display-hide.component';
import { ComponentComunicationComponent } from './component-comunication/component-comunication.component';
import { NavbarComponent } from './navbar/navbar.component';

import { EjerciciosAngularRoutingModule } from './ejercicios-angular-routing.module';
import { CcChildComponent } from './component-comunication/cc-child/cc-child.component';

@NgModule({
  declarations: [
    MainPageComponent,
    DisplayHideComponent,
    ComponentComunicationComponent,
    NavbarComponent,
    CcChildComponent
  ],
  imports: [
    CommonModule,
    EjerciciosAngularRoutingModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class EjerciciosAngularModule { }
