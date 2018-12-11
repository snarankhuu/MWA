import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dumb',
  template: `
    <strong appIsVisible [isVisible]="true">
      <ng-content></ng-content>
    </strong>
  `,
  styles: []
})
export class DumbComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
