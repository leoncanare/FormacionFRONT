import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageComponent } from '../pages/main-page/main-page.component';
import { DisplayHideComponent } from '../components/display-hide/display-hide.component';
import { ComponentComunicationComponent } from '../components/component-comunication/component-comunication.component';
import { EjerciciosAngularRoutingModule } from './ejercicios-angular-routing.module';
import { CcChildComponent } from '../components/component-comunication/cc_child/cc_child.component';

@NgModule({
  declarations: [
    MainPageComponent,
    DisplayHideComponent,
    ComponentComunicationComponent,
    CcChildComponent
  ],
  imports: [
    CommonModule,
    EjerciciosAngularRoutingModule
  ],
  exports: [

  ]
})
export class EjerciciosAngularModule { }
