import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

/**
 * Directive for detecting inside and outside clicks
 */
@Directive({
  selector: '[clickInsideOutside]',
})
export class ClickInsideOutsideDirective {
  constructor(private _elementRef: ElementRef) {}

  /**
   * Callback for clicking inside or outside
   */
  @Output('clickInsideOutside') clickInsideOutside: EventEmitter<any> =
    new EventEmitter();

  @HostListener('document:click', ['$event.target'])
  onMouseEnter(targetElement: any) {
    this.clickInsideOutside.emit(
      this._elementRef.nativeElement.contains(targetElement)
    );
  }
}
