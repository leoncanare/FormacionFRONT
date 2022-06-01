import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CompComService } from 'src/app/ejercicios-angular/pages/component-comunication/service/compCom.service';

@Component({
  selector: 'app-cc-child',
  templateUrl: './cc_child.component.html',
  styleUrls: ['./cc_child.component.scss'],
})
export class CcChildComponent implements OnInit {
  sendOutputToParent!: string;
  messageToParent = new Subject();

  //Input RECIVE:
  @Input()
  messageFromParent!: String;

  //Output to Parent:
  @Output()
  sendToParent: EventEmitter<string> = new EventEmitter<string>();

  constructor(private _compComService: CompComService) {}

  ngOnInit(): void {
    this._compComService.getServiceMessageC().subscribe((message: string) => {
      this.messageFromParent = message;
    });

    this.messageFromParentObs$.subscribe((message: any) => {
      this.messageFromParent = message;
    });
  }

  //OutPut Button
  sendToParentOutPut() {
    this.sendToParent.emit(this.sendOutputToParent = 'Usando Output');
  }

  //Service to Parent:
  sendToParentService() {
    this._compComService.setServiceMessageP('Child to Parent wiht Service');
  }

  //Observable RECIVE:
  @Input()
  messageFromParentObs$ = new Observable();

  //Observable to Parent:
  @Output()
  observableToParent: EventEmitter<any> = new EventEmitter<any>();

  sendObservableToParent() {
    this.messageToParent.next('Child to Parent wiht Observable');
    this.observableToParent.emit(this.messageToParent);
  }
}
