import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'st-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
})
export class StSectionComponent implements OnInit {
  constructor(private _elementRef: ElementRef) {}

  ngOnInit(): void {
    this._elementRef.nativeElement.classList.add('box', 'glass');
  }
}
