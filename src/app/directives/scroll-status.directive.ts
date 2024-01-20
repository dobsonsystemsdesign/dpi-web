import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appScrollStatus]'
})
export class ScrollStatusDirective {

  constructor() { }

  @HostBinding('class.scrolled') scrolled: boolean = false;
  
  @HostListener('document:scroll') // for window scroll events
  onScroll() {
    if (window.scrollY > 0) {
      this.scrolled = true;
    } else {
      this.scrolled = false;
    }
  }

}
