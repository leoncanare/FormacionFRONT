import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../interfaces/crud.interface';

import dbusuarios from 'src/app/ejercicios-angular/db/crud-users.json';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {

  usuarios: Usuario[] = dbusuarios;

  constructor() { }

  ngOnInit() {
  }

}
