import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appRmShow]'
})
export class RmShowDirective {

  constructor() { }

  @HostListener('click', ['$event'])
  onClick(eve: Event) {
    let ele = eve.target as HTMLElement
    // console.log(ele.closest('li')?.nextElementSibling?.children[1]);
    ele.closest('li')?.nextElementSibling?.children[1].classList.remove('show')

  }
}
