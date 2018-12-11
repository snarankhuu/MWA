import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lab12'
  public counter: number
  ComponentCounterValue: number
  
  constructor() {
    this.counter = 0
  }
  onCounterChange(e) {
    this.counter = e
  }
  counterChange(r) {
    this.ComponentCounterValue = r
  }
}
