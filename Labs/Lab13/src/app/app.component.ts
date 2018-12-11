import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div style="text-align:center">
  <h1>
    Welcome to {{ title }}!
  </h1>
  <app-smart [astr]="astr"></app-smart>
 
</div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lab13';
  astr = ["1", "2", "3"]
}
