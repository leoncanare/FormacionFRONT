import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styles: [
  ]
})
export class ConfirmarComponent implements OnInit {

  //[INFO] Asignamos a nuestro dialog el componente creado para confirmar la acciojn de borrad, en el mismo creamos las dos opciones la de confirmar el borrado y la de cancelar. El decorador inject lo que hace es ofrecernos todos los datos usados en el componente agregar y poder utilizarlos en nuestro dialog.
  constructor(private dialogRef: MatDialogRef<ConfirmarComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Heroe) { }

  ngOnInit(): void {

  }
   borrar(){
    this.dialogRef.close(true)
   }
   cerrar(){
    this.dialogRef.close()
   }
}
