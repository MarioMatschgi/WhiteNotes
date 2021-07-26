import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'util-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss'],
})
export class ContextMenuComponent implements OnInit {
  isOpen: boolean;

  overlay: HTMLDivElement;
  targetElement: HTMLElement;
  targetElementStyle;
  targetElementPlaceholder: HTMLElement;
  targetElementParent: HTMLElement;
  targetElementParentIdx: number;
  event: EventEmitter<boolean>;
  host: HTMLElement;

  pos = [0, 0];
  targetRect: DOMRect;

  constructor(private _elementRef: ElementRef) {}

  ngOnInit(): void {}

  @HostListener('document:click', ['$event.target'])
  onClicked(targetElement: any) {
    if (!this._elementRef.nativeElement.contains(targetElement)) {
      this.hide();
    }
  }

  showWithTarget(
    targetElement: HTMLElement,
    event: EventEmitter<boolean> = null
  ) {
    this.targetElement = targetElement;
    this.event = event;

    this.targetRect = targetElement.getBoundingClientRect();
    let pos = [
      this.targetRect.left + window.scrollX,
      this.targetRect.top + window.scrollY + this.targetRect.height,
    ];

    this.show(pos);
  }

  show(pos) {
    this.isOpen = true;

    this.pos = pos;

    this.create();

    this.event?.emit(true);
  }

  hide() {
    this.isOpen = false;

    this.remove();

    this.event?.emit(false);
  }

  toggle(pos: number[] = [0, 0]) {
    if (this.isOpen) this.hide();
    else this.show(pos);
  }

  private create() {
    const body = document.getElementsByTagName('body')[0];

    // Create overlay
    this.overlay = document.createElement('div');
    this.overlay.classList.add('context-menu-overlay');
    body.appendChild(this.overlay);

    // Move target element to body
    if (this.targetElement) {
      // this.targetElement = this.targetElement.cloneNode(true) as HTMLElement;
      this.targetElementParent = this.targetElement.parentElement;
      this.targetElementStyle = {
        left: this.targetElement.style.left,
        top: this.targetElement.style.top,
        width: this.targetElement.style.width,
        height: this.targetElement.style.height,
      };
      this.targetElement.style.left = this.targetRect.left + 'px';
      this.targetElement.style.top = this.targetRect.top + 'px';
      this.targetElement.style.width = this.targetRect.width + 'px';
      this.targetElement.style.height = this.targetRect.height + 'px';

      this.targetElementPlaceholder = this.targetElementParent.appendChild(
        document.createElement('div')
      );
      this.targetElement.classList.forEach((element) => {
        this.targetElementPlaceholder.classList.add(element);
      });
      this.targetElementPlaceholder.classList.add('context-menu-placeholder');
      this.targetElementPlaceholder.style.left = this.targetRect.left + 'px';
      this.targetElementPlaceholder.style.top = this.targetRect.top + 'px';
      this.targetElementPlaceholder.style.width = this.targetRect.width + 'px';
      this.targetElementPlaceholder.style.height =
        this.targetRect.height + 'px';

      this.targetElementParent.insertBefore(
        this.targetElementPlaceholder,
        this.targetElement
      );

      this.targetElement.classList.add('context-menu-target');
      this.targetElement = body.appendChild(this.targetElement);
    }

    // Move contextmenu to body
    let el = this._elementRef.nativeElement as HTMLElement;
    this.host = el.parentElement;
    this.host.removeChild(el);
    body.appendChild(el);

    // Add active classes for animations
    setTimeout(() => {
      this.overlay?.classList.add('active');
      (el.childNodes.item(0) as HTMLElement)?.classList.add('active');
    });
    this.targetElement?.classList.add('active');
  }

  private remove() {
    const body = document.getElementsByTagName('body')[0];

    // Remove overlay
    if (this.overlay != undefined) {
      body.removeChild(this.overlay);
      this.overlay = undefined;
    }

    // Remove target element
    if (this.targetElement) {
      this.targetElement.classList.remove('context-menu-target');
      this.targetElement.style.left = this.targetElementStyle.left;
      this.targetElement.style.top = this.targetElementStyle.top;
      this.targetElement.style.width = this.targetElementStyle.width;
      this.targetElement.style.height = this.targetElementStyle.height;

      this.targetElement = this.targetElementParent.appendChild(
        this.targetElement
      );

      this.targetElementParent.insertBefore(
        this.targetElement,
        this.targetElementPlaceholder
      );
      this.targetElementParent.removeChild(this.targetElementPlaceholder);
      this.targetElementPlaceholder = undefined;

      // TODO: Move out with other timeout like when adding
      setTimeout(() => {
        this.targetElement.classList.remove('active');
        this.targetElement = undefined;
      });
    }

    // Move context menu back
    if (this.host) {
      let el = this._elementRef.nativeElement as HTMLElement;
      (el.childNodes.item(0) as HTMLElement).classList.remove('active');

      setTimeout(() => {
        body.removeChild(el);
        this.host.appendChild(el);
        this.host = undefined;
      }, 250);
    }
  }
}
