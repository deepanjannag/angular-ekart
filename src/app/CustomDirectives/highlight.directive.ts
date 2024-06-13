import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter')
  OnMouseEnter() {
    this.renderer.setStyle(
      this.element.nativeElement,
      'transform',
      'scale(1.1)'
    );
  }

  @HostListener('mouseleave')
  onMouseOut() {
    this.renderer.setStyle(this.element.nativeElement, 'transform', 'scale(1)');
  }
}
