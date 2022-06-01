import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CompComService } from 'src/app/ejercicios-angular/pages/component-comunication/service/compCom.service';

@Component({
  selector: 'app-component-comunication',
  templateUrl: './component-comunication.component.html',
  styleUrls: ['./component-comunication.component.scss'],
  providers: [CompComService],
})
export class ComponentComunicationComponent implements OnInit {
  messageFromChild!: string;
  sendInputToChild!: String;
  sendObsToChild = new Subject();

  constructor(private _compComService: CompComService) {}

  ngOnInit(): void {
    this._compComService.getServiceMessageP().subscribe((message: string) => {
      this.messageFromChild = message;
    });

    this.messageFromChildObs$.subscribe((message: any) => {
      this.messageFromChild = message;
    });
  }

  //Input Button
  sendToChildInput() {
    this.sendInputToChild = new String('Usando Input');
  }

  //Output RECIVE:
  reciveOutputFromChild(message: string) {
    this.messageFromChild = message;
  }

  //Service to Child:
  sendToChildService() {
    this._compComService.setServiceMessageC('Parent to Child wiht Service');
  }

  //Observable RECIVE:
  @Input() 
  messageFromChildObs$ = new Observable();


  //Observable to Child:
  sendObservableToChild() {
    this.sendObsToChild.next('Parent to Child wiht Observable');
  }

  //Observable RECIVE:
  receiveObservableFromChild(event: any) {
    event.subscribe((message: any) => {
      this.messageFromChild = message;
    });
  }
}
