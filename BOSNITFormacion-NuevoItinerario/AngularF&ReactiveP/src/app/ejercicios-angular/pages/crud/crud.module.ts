import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmaterialsModule } from '../../modules/amaterials.module';
import { TableComponent } from './components/table/table.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderPaisPipe } from './pipes/order-pais.pipe';
import { SnackbarComponent } from './components/snackbar/snackbar.component';

@NgModule({
  declarations: [
    TableComponent,
    FormComponent,
    SnackbarComponent,
    OrderPaisPipe
  ],
  imports: [
    CommonModule,
    AmaterialsModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  exports: [
    TableComponent,
    FormComponent,
    SnackbarComponent
  ]
})
export class CrudModule { }
