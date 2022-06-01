import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { filter } from 'rxjs';

import { CrudService } from 'src/app/ejercicios-angular/pages/crud/service/crud.service';
import { DataComunicationService } from '../../service/dataComunication.service';
import { DeleteDialogComponent } from '../deleteDialog/deleteDialog.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = [
    'username',
    'email',
    'ofers',
    'country',
    'city',
    'action',
  ];

  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private crudService: CrudService,
    private dialog: MatDialog,
    private dataService: DataComunicationService
  ) {}

  ngOnInit() {
    this.obtainTableData();
    this.dataService
      .getformDataUpdate()
      .pipe(filter((data: boolean) => !!data))
      .subscribe((value: boolean) => {
        this.obtainTableData();
      });
  }
  
  obtainTableData() {
    this.crudService.getAllUsers().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: () => {
        this.crudService.postSnakbar(
          'Comprueba que tu bd este operativa.',
          'Cerrar',
          'error'
        );
      },
    });
  }

  openDeleteDialog(id: number) {
    const dialog = this.dialog.open(DeleteDialogComponent, {});
    dialog.afterClosed()
    .pipe(filter((res: boolean) => !!res))
    .subscribe((res) => {
        return this.crudService.deleteUser(id).subscribe({
          next: (res) => {
            this.obtainTableData();
            this.crudService.postSnakbar(
              'Usuario eliminado correctamente.',
              'Aceptar',
              'perfecto'
            );
          },
          error: () => {
            this.crudService.postSnakbar(
              'Error al borrar el usuario.',
              'Cerrar',
              'error'
            );
          },
        });
    });
  }
  @Output()
  observableToForm: EventEmitter<any> = new EventEmitter<any>();

  editUser(row: any) {
    console.log(row);
    this.observableToForm.emit(row);
  }
}
// FITRO SUPERIOR TABLA
// applyFilter(event: Event) {
//   const filterValue = (event.target as HTMLInputElement).value;
//   this.dataSource.filter = filterValue.trim().toLowerCase();

//   if (this.dataSource.paginator) {
//     this.dataSource.paginator.firstPage();
//   }
// }
