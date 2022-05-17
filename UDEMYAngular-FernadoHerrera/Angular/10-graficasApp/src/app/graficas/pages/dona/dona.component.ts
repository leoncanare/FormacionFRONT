import { Component } from '@angular/core';
import { ChartType, ChartData} from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Other' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [{ 
        data: [ 350, 450, 100, 40 ],
        backgroundColor: ['#e28743','#063970','#76b5c5', '#eeeee4'],
        hoverBackgroundColor: ['#e28743','#063970','#76b5c5', '#eeeee4'],
        hoverBorderColor: ['#e28743','#063970','#76b5c5', '#eeeee4']
    }]
  };
  public doughnutChartType: ChartType = 'doughnut';
}
