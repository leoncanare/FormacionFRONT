import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LogarithmicScale } from 'chart.js';
import { Usuario } from '../../interfaces/crud.interface';
import { Pais } from '../../interfaces/pais.interface';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss'],
})
export class CrudComponent implements OnInit {
  usuarios: Usuario[] = [];

  paises: Pais[] = [];
  paisesList!: any[];

  contraseñaa: string = '';

  filteredCountries!: any[];

  crudForm: FormGroup = this.fb.group({
    nombre: [, [Validators.required]],
    correo: [, [Validators.required]],
    suscrito: [, [Validators.required]],
    pais: [, [Validators.required]],
    ciudad: [, [Validators.required]],
    contraseña: [, [Validators.required]],
    contraseña2: [, [Validators.required]],
  });

  constructor(private crudService: CrudService, private fb: FormBuilder) {}

  ngOnInit() {
    this.crudService.getAllUsers().subscribe((users) => (this.usuarios = users));

    this.crudService.getCountries().then(countries => {
      this.paisesList = countries;
    });

  }
  
  filterCountry(event:any) {
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.paisesList.length; i++) {
      let country = this.paisesList[i];
      if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(country);
      }
    }
    this.filteredCountries = filtered;
  }
  
}
// this.crudService.getAllCountryes().subscribe((res) => {
//   this.paises = res;
//   this.paises.forEach((paises) => {
//     this.paisesName.push(paises.name.official);
//   });
//   console.log(this.paisesName);
  
// });  

// cols!: any[];

// this.cols = [
//   { field: 'username', header: 'Nombre Usuario' },
//   { field: 'email', header: 'Correo electronico' },
//   // { field: 'ofers', header: 'Suscrito' },
//   { field: 'country', header: 'Pais' },
//   { field: 'city', header: 'Ciudad' },
// ];
