import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CcChildComponent } from '../pages/component-comunication/cc_child/cc_child.component';

import { MainPageComponent } from '../pages/home/main-page.component';
import { DisplayHideComponent } from '../pages/display-hide/display-hide.component';
import { ComponentComunicationComponent } from '../pages/component-comunication/component-comunication.component';
import { EjerciciosAngularRoutingModule } from './ejercicios-angular-routing.module';
import { TrafficLightComponent } from '../pages/traffic-light/traffic-light.component';
import { ExternalLibraryComponent } from '../pages/external-library/external-library.component';
import { GraphicsModule } from '../pages/external-library/graphics.module';
import { CrudComponent } from '../pages/crud/crud.component';
import { CrudModule } from '../pages/crud/crud.module';


@NgModule({
  declarations: [
    MainPageComponent,
    DisplayHideComponent,
    ComponentComunicationComponent,
    TrafficLightComponent,
    CcChildComponent,
    ExternalLibraryComponent,
    CrudComponent
  ],
  imports: [
    CommonModule,
    EjerciciosAngularRoutingModule,
    GraphicsModule,
    CrudModule
  ],
  exports: [
    
  ]
})
export class EjerciciosAngularModule { }
