import { Component, HostListener, Input, OnInit } from '@angular/core';

/**
 * Component for Popovers
 */
@Component({
  selector: 'pop-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {
  /**
   * List of all popovers
   */
  static popovers: PopoverComponent[] = [];

  /**
   * Whether the popover is open
   */
  isOpen: boolean;

  /**
   * The position of the popover
   * - normal: Position at button
   */
  @Input() position: 'normal' | 'center' = 'normal';

  /**
   * The alignment of the popover
   * Align only possible if position is `normal`
   * - center: Centered on the screen
   * - left: Left on the screen
   * - right: Right on the screen
   */
  @Input() align: 'center' | 'left' | 'right' = 'center';

  constructor() {}

  ngOnInit(): void {}

  /**
   * Keydown event
   * @param event Event
   */
  @HostListener('window:keyup.escape', ['$event'])
  keydown(event: KeyboardEvent) {
    // Check if this is the front-most popover
    if (PopoverComponent.popovers[PopoverComponent.popovers.length - 1] == this)
      this.set(false);
  }

  /**
   * Toggles the visibility of the popover
   */
  toggle() {
    this.set(!this.isOpen);
  }

  /**
   * Sets the visibility of the popover
   * @param isOpen Whether the popover should be open
   */
  set(isOpen: boolean) {
    setTimeout(() => {
      this.isOpen = isOpen;

      if (this.isOpen) PopoverComponent.popovers.push(this);
      else
        PopoverComponent.popovers.splice(
          PopoverComponent.popovers.findIndex((e) => e == this),
          1
        );
    }, 0);
  }

  /**
   * Hides the popover if it is open
   */
  hide_if_open() {
    if (this.isOpen) this.set(false);
  }
}
