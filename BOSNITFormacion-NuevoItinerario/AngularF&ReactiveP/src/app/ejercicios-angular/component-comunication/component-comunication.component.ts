import { Component } from '@angular/core';

@Component({
  selector: 'app-component-comunication',
  templateUrl: './component-comunication.component.html',
  styleUrls: ['./component-comunication.component.scss']
})
export class ComponentComunicationComponent {

  messageParent: string = '';

  reciveMessage(message: string) {
    this.messageParent = message;
  }

}
