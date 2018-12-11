import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>
     <button (click)="decrease()">-</button>
     <strong>{{counter}}</strong>
     <button (click)="increase()">+</button>
    </p>
  `,
  styles: []
})
export class CounterComponent implements OnInit {
  @Input() counter: number
  @Output() counterChange
  constructor() {
    this.counterChange = new EventEmitter()
  }
  ngOnInit() { }
  increase() {
    this.counter++
    this.counterChange.emit(this.counter)
    return false
  }
  decrease() {
    this.counter--
    this.counterChange.emit(this.counter)
    return false
  }
}
