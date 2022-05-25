import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CryptoCurrencies } from '../interfaces/crypto.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GeckoService {
  private urlAPI: string = 'https://api.coingecko.com/api/v3/coins/markets';
  //public resultados: CryptoCurrencies[] = [];

  constructor(private http: HttpClient) {}

  get httpParams(){
    return new HttpParams()
      .set('vs_currency', 'usd')
      .set('order', 'market_cap_desc')
      .set('per_page', '9')
      .set('page', '1')
      .set('sparkline', 'false');
  }

  cryptoData(): Observable<CryptoCurrencies[]>{
    const url = `${this.urlAPI}`;
    return this.http.get<CryptoCurrencies[]>(url, {params: this.httpParams})
  }
}
