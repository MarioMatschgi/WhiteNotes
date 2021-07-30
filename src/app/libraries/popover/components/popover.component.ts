import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

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

  private host: HTMLElement;

  /**
   * Whether the popover is open
   */
  private _isOpen: boolean;
  @Input() set isOpen(val: boolean) {
    this.set(val);
  }
  get isOpen(): boolean {
    return this._isOpen;
  }

  @Output() openChange = new EventEmitter<boolean>();

  @Input() userCanClose: boolean = true;

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

  constructor(private _elementRef: ElementRef, private router: Router) {
    router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        this.hide_if_open();
      }
    });
  }

  ngOnInit(): void {}

  /**
   * Keydown event
   * @param event Event
   */
  @HostListener('window:keyup.escape', ['$event'])
  keydown(event: KeyboardEvent) {
    // Check if this is the front-most popover
    if (PopoverComponent.popovers[PopoverComponent.popovers.length - 1] == this)
      this.userClose();
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
      this._isOpen = isOpen;

      const body = document.getElementsByTagName('body')[0];
      let el = this._elementRef.nativeElement as HTMLElement;
      if (this._isOpen) {
        PopoverComponent.popovers.push(this);

        this.host = el.parentElement;
        this.host.removeChild(el);
        body.appendChild(el);
      } else {
        PopoverComponent.popovers.splice(
          PopoverComponent.popovers.findIndex((e) => e == this),
          1
        );

        if (this.host) {
          (el.childNodes.item(0) as HTMLElement).classList.remove('active');

          body.removeChild(el);
          this.host.appendChild(el);
          this.host = undefined;
        }
      }

      this.openChange.emit(isOpen);
    }, 0);
  }

  /**
   * Hides the popover if it is open
   */
  hide_if_open() {
    if (this.isOpen) this.set(false);
  }

  userClose() {
    if (this.userCanClose) this.hide_if_open();
  }
}
