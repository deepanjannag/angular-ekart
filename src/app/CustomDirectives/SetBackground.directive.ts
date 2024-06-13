import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appSetBackground]',
})
export class SetBackground implements OnInit {
  //private element: ElementRef;
  constructor(private element: ElementRef) {
    //this.element = element;
  }

  ngOnInit() {
    this.element.nativeElement.style.backgroundColor = 'red';
  }
}
