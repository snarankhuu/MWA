import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>
     <button (click)="decrease()">-</button>
     <strong>{{counterValue}}</strong>
     <button (click)="increase()">+</button>
    </p>
  `,
  styles: []
})
export class CounterComponent implements OnInit {

  counterValue: number
  constructor() { }

  ngOnInit() {
    this.counterValue = 0
  }

  increase() {
    this.counterValue++
    return false
  }
  decrease() {
    this.counterValue--
    return false
  }
}
