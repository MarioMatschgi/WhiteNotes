import {
  Directive,
  ElementRef,
  HostListener,
  Output,
  EventEmitter,
} from '@angular/core';

/**
 * Directive for detecting outside clicks
 */
@Directive({
  selector: '[clickOutside]',
})
export class ClickOutsideDirective {
  constructor(private _elementRef: ElementRef) {}

  /**
   * Callback for clicking outside
   */
  @Output('clickOutside') clickOutside: EventEmitter<any> = new EventEmitter();

  @HostListener('document:click', ['$event.target'])
  onMouseEnter(targetElement: any) {
    if (!this._elementRef.nativeElement.contains(targetElement)) {
      this.clickOutside.emit(null);
    }
  }
}
