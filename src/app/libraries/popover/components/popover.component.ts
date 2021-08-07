import {
  ChangeDetectorRef,
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

  private pop_container: HTMLElement;

  /**
   * Whether the popover is open
   */
  private _isOpen: boolean = false;
  @Input() set isOpen(val: boolean) {
    this.set(val);
  }
  get isOpen(): boolean {
    return this._isOpen;
  }

  @Output() openChange = new EventEmitter<boolean>();
  @Output() onClose = new EventEmitter();
  @Output() onOpen = new EventEmitter();

  @Input() userCanClose: boolean = true;

  /**
   * The position of the popover
   * - normal: Position at button
   */
  @Input() position: 'normal' | 'center' = 'center';

  /**
   * The alignment of the popover
   * Align only possible if position is `normal`
   * - center: Centered on the screen
   * - left: Left on the screen
   * - right: Right on the screen
   */
  @Input() align: 'center' | 'left' | 'right' = 'center';

  constructor(
    private _elementRef: ElementRef,
    private router: Router,
    private changeDetection: ChangeDetectorRef
  ) {
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
      if (this._isOpen) {
        PopoverComponent.popovers = PopoverComponent.popovers.filter(
          (el) => el != this
        );
        PopoverComponent.popovers.push(this);

        this.pop_container = (
          this._elementRef.nativeElement as HTMLElement
        ).getElementsByClassName('pop_container')[0] as HTMLElement;

        body.appendChild(this.pop_container);
      } else {
        PopoverComponent.popovers = PopoverComponent.popovers.filter(
          (el) => el != this
        );

        if (this.pop_container) {
          (this._elementRef.nativeElement as HTMLElement).appendChild(
            this.pop_container
          );
          this.pop_container = undefined;
        }
      }

      this.changeDetection.detectChanges();

      this.openChange.emit(isOpen);
      if (isOpen) this.onOpen.emit();
      else this.onClose.emit();
    });
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
