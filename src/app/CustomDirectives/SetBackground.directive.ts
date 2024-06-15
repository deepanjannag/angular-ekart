import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSetBackground]',
})
export class SetBackground implements OnInit {
  @Input('appSetBackground')
  changeTextAndBackgroundColor: { backColor: string; textColor: string };

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    //this.element.nativeElement.style.backgroundColor = 'red';
    this.renderer.setStyle(
      this.element.nativeElement,
      'background-color',
      this.changeTextAndBackgroundColor.backColor
    );

    this.renderer.setStyle(
      this.element.nativeElement,
      'color',
      this.changeTextAndBackgroundColor.textColor
    );
  }
}
