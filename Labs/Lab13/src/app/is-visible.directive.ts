import { Directive, Input, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[appIsVisible]'
})
export class IsVisibleDirective {
  @Input() isVisible: boolean
  constructor() {
  }
  @HostBinding('style.visibility') myVisibility;
  ngOnInit() {
    this.myVisibility = !this.isVisible ? "hidden" : "none"
  }

}
