import { Component} from '@angular/core';

@Component({
  selector: 'app-display-hide',
  templateUrl: './display-hide.component.html',
  styleUrls: ['./display-hide.component.scss']
})
export class DisplayHideComponent {

  display   : boolean = false;
  message_btn: string  = 'MUESTRAME';

  displayAndHide() {

    if (this.display) {
      this.display = false;
      this.message_btn = 'MUESTRAME';
    }else {
      this.display = true;
      this.message_btn = 'OCULTAME';
    }
  }

}
