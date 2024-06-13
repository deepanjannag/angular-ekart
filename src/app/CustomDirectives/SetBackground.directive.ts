import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSetBackground]',
})
export class SetBackground implements OnInit {
  //private element: ElementRef;
  //private renderer: Renderer2;
  constructor(private element: ElementRef, private renderer: Renderer2) {
    //this.element = element;
    //this.renderer=renderer;
  }

  ngOnInit() {
    //this.element.nativeElement.style.backgroundColor = 'red';

    this.renderer.setStyle(
      this.element.nativeElement,
      'background-color',
      'blue'
    );

    this.renderer.setStyle(this.element.nativeElement, 'color', 'yellow');
  }
}
