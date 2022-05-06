import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { CompComService } from 'src/app/ejercicios-angular/services/compCom.service';

@Component({
  selector: 'app-cc-child',
  templateUrl: './cc_child.component.html',
  styleUrls: ['./cc_child.component.scss'],
})
export class CcChildComponent {
  //INPUT:
  @Input()
  messageChild!: string;
  //messageFromService!: string;

  //OUTPUT:
  @Output()
  sendToParent: EventEmitter<string> = new EventEmitter<string>();
  sendMessageParent: string = 'Usando Output';

  outPutParent() {
    this.sendToParent.emit(this.sendMessageParent);
  }

  //SERVICE EMIT TO Parent:
  childService() {
    this.sendToParent.emit(this.compComService.sendToParent());
  }

  //SUBSCRIPTION TO Parent SERV. & OBS.
  subscription: Subscription;
  constructor(private compComService: CompComService) {
    this.subscription = this.compComService.$ParentMessage.subscribe(
      (parentmessage) => {
        this.messageChild = parentmessage;
      }
    );
  }

  childObs() {
    this.compComService.ChildMessage('Usando Subject Hijo');
  }
}
