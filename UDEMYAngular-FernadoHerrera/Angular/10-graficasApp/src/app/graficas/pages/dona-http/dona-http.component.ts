import { Component, OnInit } from '@angular/core';
import { GraficaService } from '../../services/grafica.service';

import { ChartType, ChartData } from 'chart.js';
//[INFO] Para comenzar debemos levantar nuestro jason server de donde cogeremos la data, para continuear utilizaremos un servicio para la obtencion de esos datos conj el modele HttpClientModule que importaremos en el mainModule. Creamos un get a nuestro enlace json desde nuestro service. Nos subscribimos a el.
@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [],
})
export class DonaHttpComponent implements OnInit {
  public doughnutChartLabels: string[] = [];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [],
        backgroundColor: [
          '#e28743',
          '#063970',
          '#76b5c5',
          '#eeeee4',
          '#96be25',
        ],
        hoverBackgroundColor: [
          '#e28743',
          '#063970',
          '#76b5c5',
          '#eeeee4',
          '#96be25',
        ],
        hoverBorderColor: [
          '#e28743',
          '#063970',
          '#76b5c5',
          '#eeeee4',
          '#96be25',
        ],
      },
    ],
  };
  public doughnutChartType: ChartType = 'doughnut';

  constructor(private graficasService: GraficaService) {}

  ngOnInit(): void {

    this.graficasService.getUsuariosRSS().subscribe((data) => {
      Object.entries(data).forEach(([key, element]: any) => {
        this.doughnutChartData.datasets[0].data.push(element);
        this.doughnutChartLabels.push(key);
      });
    });
    }
    // this.graficasService.getDataRSS()
    //   .subscribe(({labels, values}) => {
    //     this.doughnutChartData.datasets[0].data.push(values);
    //     this.doughnutChartLabels = labels;
    //   })
    // }
    
}

// [INFO] Levantar bd -> json-server --watch db.json