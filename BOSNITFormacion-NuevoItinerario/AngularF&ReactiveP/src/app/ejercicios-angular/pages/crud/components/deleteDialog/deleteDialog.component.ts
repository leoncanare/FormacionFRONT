import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Usuario } from 'src/app/ejercicios-angular/pages/crud/interfaces/users.interface';

@Component({
  selector: 'app-deleteDialog',
  templateUrl: './deleteDialog.component.html',
  styleUrls: ['./deleteDialog.component.scss'],
})
export class DeleteDialogComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Usuario
  ) {}

  ngOnInit(): void {}
  borrar() {
    this.dialogRef.close(true);
  }
  cerrar() {
    this.dialogRef.close();
  }
}
