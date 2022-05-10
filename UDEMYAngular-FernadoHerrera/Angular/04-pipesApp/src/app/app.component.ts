import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  // [INFO] Cargamos todas las animaciones de primengConfig que trae por defecto los modulos que importamos en nuestro caso la caja de texto de no comunes que al contarerla y extenderla genera un efecto de burbuja.
  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

}
