import { NgModule } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';
import { CommonModule } from '@angular/common';

import { BarsComponent } from '../../components/bars/bars.component';
import { RadarComponent } from '../../components/radar/radar.component';

@NgModule({
  declarations: [
    BarsComponent,
    RadarComponent,
  ],
  imports: [
    CommonModule,
    NgChartsModule
  ],
  exports: [
    RadarComponent,
    BarsComponent]
})
export class GraphicsModule { }
