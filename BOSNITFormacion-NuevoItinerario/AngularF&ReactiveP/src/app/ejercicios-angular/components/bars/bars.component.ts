import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartType, ChartData } from 'chart.js';

import { GeckoService } from '../../services/gecko.service';
import { CryptoCurrencies } from '../../interfaces/crypto.interface';


@Component({
  selector: 'app-bars',
  templateUrl: './bars.component.html',
  styleUrls: ['./bars.component.scss'],
})
export class BarsComponent implements OnInit {

  coins: CryptoCurrencies[] = [];
  coinsName: string[] = []
  coinsAth: number[] = []
  colorChart: string[] = ['#f7931a','#62688f','#03ac83','#2775ca','#f0b90b','#494e52','#f6d68b','#3477d5','#1bf0a2']

  @ViewChild(BaseChartDirective) chart!: BaseChartDirective;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      x: {},
      y: {},
    },
    plugins: {
      title:{
        display: true,
        text: 'Crypto currencies 24h Volume',
        padding: 20, 
        font: {
          weight:'bold',
          size: 20,
        },
      },
      legend: {
        display: false,
      },
    },
  };
  public barChartType: ChartType = 'bar';

  public barChartData: ChartData<'bar'> = {
    labels: this.coinsName,
    datasets: [
      {
        data: this.coinsAth,
        backgroundColor: this.colorChart,
        hoverBackgroundColor: this.colorChart,
      }
    ]
  };

  constructor(private apiService: GeckoService) {}

  ngOnInit() {
    this.apiService.cryptoData()
    .subscribe(res =>{
      this.coins = res
      this.coins.forEach((currencies) =>{
        this.coinsAth.push(currencies.total_volume)
        this.coinsName.push(currencies.name)
      })
      this.chart.render()
    });
  }
}