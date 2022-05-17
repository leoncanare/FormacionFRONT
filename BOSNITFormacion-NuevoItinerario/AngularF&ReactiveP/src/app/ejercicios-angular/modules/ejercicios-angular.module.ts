import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CcChildComponent } from '../components/component-comunication/cc_child/cc_child.component';

import { MainPageComponent } from '../pages/home/main-page.component';
import { DisplayHideComponent } from '../components/display-hide/display-hide.component';
import { ComponentComunicationComponent } from '../components/component-comunication/component-comunication.component';
import { EjerciciosAngularRoutingModule } from './ejercicios-angular-routing.module';
import { TrafficLightComponent } from '../components/traffic-light/traffic-light.component';
import { ExternalLibraryComponent } from '../components/external-library/external-library.component';

@NgModule({
  declarations: [
    MainPageComponent,
    DisplayHideComponent,
    ComponentComunicationComponent,
    TrafficLightComponent,
    CcChildComponent,
    ExternalLibraryComponent
  ],
  imports: [
    CommonModule,
    EjerciciosAngularRoutingModule
  ],
  exports: [

  ]
})
export class EjerciciosAngularModule { }
