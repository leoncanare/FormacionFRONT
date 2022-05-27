import { Component } from '@angular/core';

@Component({
  selector: 'app-traffic-light',
  templateUrl: './traffic-light.component.html',
  styleUrls: ['./traffic-light.component.scss'],
})
export class TrafficLightComponent {
  display: boolean = false;
  color: string = '';

  powerButon() {
    this.display = !this.display;
  }

  changeColor(event: any) {
    this.color = event.target.value;
  }
}
