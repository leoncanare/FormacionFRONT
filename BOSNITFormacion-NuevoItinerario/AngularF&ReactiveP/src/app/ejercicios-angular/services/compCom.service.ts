import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CompComService {
  
  //MODO RESUMIDO:

  // private _serviceMessage$ = new BehaviorSubject('menssage');

  // get ServiceMessage$(): BehaviorSubject<string> {
  //   return this._serviceMessage$;
  // }

  // set ServiceMessage$(value: string) {
  //   this._serviceMessage$.next(value);
  // }

  // useObservable( message: string): Observable<string> {
  //   return this.get( _servoceMesage$ );
  // }

  //SERVICIO
  parentMsgServ: string = 'Usando Servicio Parent';
  childMsgServ: string = 'Usando Servicio Child';

  sendToParent() {
    return this.childMsgServ;
  }

  sendToChild() {
    return this.parentMsgServ;
  }

  //OVSERVABLE
  private ParentMessageSource = new Subject<string>();

  $ParentMessage = this.ParentMessageSource.asObservable();

  ParentMessage(messageP: string) {
    this.ParentMessageSource.next(messageP);
  }

  private ChildMessageSource = new Subject<string>();

  $ChildMessage = this.ChildMessageSource.asObservable();

  ChildMessage(messageC: string) {
    this.ChildMessageSource.next(messageC);
  }
}
