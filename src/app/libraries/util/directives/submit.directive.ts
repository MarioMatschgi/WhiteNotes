import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
} from '@angular/core';

@Directive({
  selector: '[submit]',
})
export class SubmitDirective {
  @Output() submit = new EventEmitter<boolean>();

  private wasSubmit = false;

  constructor(private _elementRef: ElementRef) {}

  @HostListener('focusout')
  onFocusOut() {
    if (this.wasSubmit) return;

    this.submit.emit(false);
  }
  @HostListener('keyup.enter')
  onSubmit() {
    this.wasSubmit = true;
    (this._elementRef.nativeElement as HTMLInputElement).blur();
    this.submit.emit(true);
    this.wasSubmit = false;
  }
}
