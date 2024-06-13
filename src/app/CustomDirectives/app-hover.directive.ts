// Suggested code may be subject to a license. Learn more: ~LicenseLog:1849173131.
import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHover]',
})
export class AppHoverDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  // Suggested code may be subject to a license. Learn more: ~LicenseLog:243509948.
  @HostBinding('style.backgroundColor')
  backgroundColor = '#282828';

  @HostBinding('style.border')
  border = 'none';

  @HostBinding('style.color')
  color = 'white';

  @HostListener('mouseenter')
  // Suggested code may be subject to a license. Learn more: ~LicenseLog:2477907741.
  onMouseEnter() {
    this.backgroundColor = 'white';
    this.border = '4px solid green';
    this.color = 'black';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.backgroundColor = '#282828';
    this.border = 'none';
    this.color = 'white';
  }
}
