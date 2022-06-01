import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataComunicationService {

  private _formDataUpdateSubject = new BehaviorSubject(false);
  
  getformDataUpdate(): BehaviorSubject<boolean> {
    return this._formDataUpdateSubject;
  }

  setformDataUpdate(value: boolean) {
    return this._formDataUpdateSubject.next(value);
  }
}
