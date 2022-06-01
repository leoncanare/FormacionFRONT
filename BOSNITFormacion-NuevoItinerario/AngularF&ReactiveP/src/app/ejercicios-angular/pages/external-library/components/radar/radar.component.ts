import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';

import { CryptoCurrencies } from '../../interface/crypto.interface';
import { GeckoService } from 'src/app/ejercicios-angular/pages/external-library/service/gecko.service';

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.scss'],
})
export class RadarComponent implements OnInit {
  coins: CryptoCurrencies[] = [];
  coinsName: string[] = [];
  coinsAth: number[] = [];
  coinsChangePr: number[] = [];
  coinsChangeMc: number[] = [];
  coinsAtl: number[] = [];
  coinsRank: number[] = [];

  @ViewChild(BaseChartDirective) chart!: BaseChartDirective;

  public radarChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      title:{
        display: true,
        text: 'Crypto Info',
        padding: 20, 
        font: {
          weight:'bold',
          size: 20,
        },
      },
    },
  };
  public radarChartLabels: string[] = this.coinsName;

  public radarChartData: ChartData<'radar'> = {
    labels: this.radarChartLabels,
    datasets: [
      {
        data: this.coinsAth,
        label: 'Ath Change',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132)',
      },
      {
        data: this.coinsChangeMc,
        label: 'Mc Change 24h',
        backgroundColor: 'rgba(98, 104, 143, 0.2)',
        borderColor: 'rgba(98, 104, 143)',
      },
      {
        data: this.coinsChangePr,
        label: 'Price Change 24h',
        backgroundColor: 'rgba(3, 172, 131, 0.2)',
        borderColor: 'rgba(3, 172, 131)',
      },
      {
        data: this.coinsRank,
        label: 'Rank',
        backgroundColor: 'rgba(39, 117, 202, 0.2)',
        borderColor: 'rgba(39, 117, 202)',
      },
      {
        data: this.coinsAtl,
        label: 'Price Media Change',
        backgroundColor: 'rgba(240, 185, 11, 0.2)',
        borderColor: 'rgba(240, 185, 11)',
      },
    ],
  };
  public radarChartType: ChartType = 'radar';

  constructor(private apiService: GeckoService) {}

  ngOnInit(): void {
    this.apiService.cryptoData().subscribe((res) => {
      this.coins = res;
      this.coins.forEach((currencies) => {
        this.coinsName.push(currencies.name);
        this.coinsAth.push(currencies.ath_change_percentage);
        this.coinsChangePr.push(currencies.price_change_percentage_24h);
        this.coinsChangeMc.push(currencies.market_cap_change_percentage_24h);
        this.coinsRank.push(currencies.market_cap_rank);
        this.coinsAtl.push(currencies.atl);
      });
      console.log(this.coinsAth);
      this.chart.render();
    });
  }
  // events
  public chartClicked({
    event,
    active,
  }: {
    event: ChartEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: ChartEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }
}
