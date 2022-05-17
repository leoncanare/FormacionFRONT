import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from '../pages/home/main-page.component';
import { DisplayHideComponent } from '../components/display-hide/display-hide.component';
import { ComponentComunicationComponent } from '../components/component-comunication/component-comunication.component';
import { TrafficLightComponent } from '../components/traffic-light/traffic-light.component';
import { ExternalLibraryComponent } from '../components/external-library/external-library.component';

//[INFO] Aqui generamnos la variable que alverga todas las rutas hijas de mainPage que exportaremos a el app-routing principal fuera de ejercicios-angular.
const routes: Routes = [
  //[INFO] Si quisieramos mosrtrar el madre con el hijo:
  //(1)-> {path: '', component: MainPageComponent, children: [
  {
    path: '',
    children: [
      { path: 'displayHide', component: DisplayHideComponent },
      {
        path: 'componentComunication',
        component: ComponentComunicationComponent,
      },
      { path: 'trafficLight', component: TrafficLightComponent },
      { path: 'externalLibrary', component: ExternalLibraryComponent },
      { path: '', component: MainPageComponent, pathMatch: 'full' },
      //[INFO] Con su ruta por defecto:
      //(2)->  {path: '**', redirectTo: ''}
    ],
  },
];

//[INFO] Si nos damos cuenta aqui declaramos el forChild que importa las rutas hijas de esta manera.
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EjerciciosAngularRoutingModule {}
