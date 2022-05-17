import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [],
})
export class GraficaBarraComponent implements OnInit {
  @Input() horizontal: boolean = false;

  public barChartOptions: ChartOptions = {
    //[INFO] Para cambiar la orientacion del grafico de barras sentido de las x o la y(horizontal o vertical).
    indexAxis: 'x',
    responsive: true,
  };
  //[INFO] Marcamos los datos que se representan como inputs para que cogas estos para represntar.
  @Input() barChartLabels: BaseChartDirective['labels'] = [
    /*'2015', '2016', '2017', '2018', '2019', '2020'*/
  ];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  @Input() barChartData: ChartDataset[] = [
    // { data: [65, 67, 70, 75, 80, 90], label: 'PHP' },
    // { data: [50, 48, 47, 49, 44, 40], label: '.Net' },
    // { data: [40, 30, 28, 25, 22, 20], label: 'Java' },
  ];

  constructor() {
    console.log(this.horizontal);
  }
  //[INFO] Marcamos que si en el caso que nuestro input sea true el insexAxis cambie su valor a y para que se vea el grafico de barras en horizontal.
  ngOnInit(): void {
    if (this.horizontal) {
      this.barChartOptions.indexAxis = 'y';
    }
  }
}
