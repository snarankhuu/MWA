import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-smart',
  template: `<div appLoggable><ul>
                <li *ngFor="let str of astr"> <app-dumb>{{ str }}</app-dumb> </li>
            </ul></div>`,
  styles: []
})
export class SmartComponent implements OnInit {
  @Input() astr: string[]
  constructor() { }

  ngOnInit() {
  }

}
