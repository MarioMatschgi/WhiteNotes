import {
  EventEmitter,
  Directive,
  ElementRef,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { ContextMenuComponent } from '../components/context-menu/context-menu.component';

@Directive({
  selector: '[contextMenu]',
})
export class ContextMenuDirective {
  constructor(private elementRef: ElementRef) {}

  @Input() contextMenu: ContextMenuComponent;

  @HostListener('contextmenu', ['$event', '$event.target'])
  onRightClick(evt: MouseEvent, targetElement: HTMLElement) {
    evt.preventDefault();

    this.contextMenu.showWithTarget(
      this.elementRef.nativeElement as HTMLElement
    );
  }
}

@Directive({
  selector: '[contextMenuOpen]',
})
export class ContextMenuOpenDirective {
  constructor(
    private elementRef: ElementRef,
    private c: ContextMenuOpenEventDirective
  ) {}

  @Input() contextMenuOpen: ContextMenuComponent;

  @HostListener('contextmenu', ['$event', '$event.target'])
  onRightClick(evt: MouseEvent, targetElement: HTMLElement) {
    evt.preventDefault();

    this.contextMenuOpen.showWithTarget(
      this.elementRef.nativeElement as HTMLElement,
      this.c.contextMenuOpenEvent
    );
  }
}

@Directive({
  selector: '[contextMenuOpenEvent]',
})
export class ContextMenuOpenEventDirective {
  constructor() {}

  @Output() contextMenuOpenEvent = new EventEmitter<boolean>();
}
