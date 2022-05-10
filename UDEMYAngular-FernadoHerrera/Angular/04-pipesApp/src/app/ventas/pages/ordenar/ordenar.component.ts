import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  pipeValue: boolean = true;
  
  enMayusculas(){
    this.pipeValue = !this.pipeValue;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
