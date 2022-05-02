import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-cc-child',
  templateUrl: './cc-child.component.html',
  styleUrls: ['./cc-child.component.scss']
})
export class CcChildComponent {
  
  messageChild: string = 'hola';

  @Output()
  send: EventEmitter<string> = new EventEmitter<string>()
  outPutMessage: string = 'Usando Output';

  outPutParent(){
    this.send.emit(this.outPutMessage);
  }

}
