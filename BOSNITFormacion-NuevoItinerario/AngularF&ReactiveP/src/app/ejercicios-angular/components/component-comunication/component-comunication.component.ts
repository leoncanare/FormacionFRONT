import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { CompComService } from 'src/app/ejercicios-angular/services/compCom.service';

@Component({
  selector: 'app-component-comunication',
  templateUrl: './component-comunication.component.html',
  styleUrls: ['./component-comunication.component.scss'],
  providers: [CompComService],
})
export class ComponentComunicationComponent {
  messageParent!: string;
  sendMessageChild!: string;

  //INPUT:
  sendInput() {
    return (this.sendMessageChild = 'Usando Input');
  }

  //OUTPUT RECIVE:
  reciveMessage(message: string) {
    this.messageParent = message;
  }

  //SERVICE TO Child:
  parentService() {
    this.sendMessageChild = this.compComService.sendToChild();
  }

  //SUBSCRIPTION TO Child SERV. & OBS.
  subscription: Subscription;
  constructor(private compComService: CompComService) {
    this.subscription = this.compComService.$ChildMessage.subscribe(
      (childmessage) => {
        this.messageParent = childmessage;
      }
    );
  }

  parentObs() {
    this.compComService.ParentMessage('Usando Subject Padre');
  }
}
