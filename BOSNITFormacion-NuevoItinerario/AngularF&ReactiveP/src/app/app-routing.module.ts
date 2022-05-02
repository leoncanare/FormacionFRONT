import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//[INFO] Esta funcion flecha es una promesa, lo que hace es coje el path por defecto carga los hijos que importamos desde EjerciciosAngularModule exportado en el ejercicios-angular.module.
const routes: Routes = [
  {path: '', loadChildren: () => import('./ejercicios-angular/ejercicios-angular.module').then(m => m.EjerciciosAngularModule)}
];

// [INFO] Queda claro que aqui importamos RouterModule.Root porque es el que coje la info del .forChild de nuestro modulo de arriba.
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
