import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CompComService {

  private _serviceMessageFromParentSubject = new BehaviorSubject('');
  private _serviceMessageFromChildSubject = new BehaviorSubject('');

  getServiceMessageP(): BehaviorSubject<string> {
    return this._serviceMessageFromParentSubject;
  }

  setServiceMessageP(value: string) {
    this._serviceMessageFromParentSubject.next(value);
  }

  getServiceMessageC(): BehaviorSubject<string> {
    return this._serviceMessageFromChildSubject;
  }

  setServiceMessageC(value: string) {
    this._serviceMessageFromChildSubject.next(value);
  }
}
