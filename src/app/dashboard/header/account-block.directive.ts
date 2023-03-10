import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAccountBlock]'
})
export class AccountBlockDirective {

  constructor(private el: ElementRef) { }
  @HostListener('mouseenter') onMouseEnter() {
    console.log('souris entrée !')
    this.el.nativeElement.classList.add('transform')
    this.el.nativeElement.classList.add('opacity-100')
    this.el.nativeElement.classList.add('scale-100')
    this.el.nativeElement.classList.remove('opacity-0')
  }

  @HostListener('mouseleave') onMouseLeave() {
    console.log('souris partie !')
    this.el.nativeElement.classList.remove('transform')
    this.el.nativeElement.classList.remove('opacity-100')
    this.el.nativeElement.classList.remove('scale-100')
    this.el.nativeElement.classList.add('opacity-0')
  }
}
