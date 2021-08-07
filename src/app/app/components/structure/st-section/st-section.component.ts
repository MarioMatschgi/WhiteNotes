import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'st-section',
  templateUrl: './st-section.component.html',
  styleUrls: ['./st-section.component.scss'],
})
export class StSectionComponent implements OnInit {
  constructor(private _elementRef: ElementRef) {}

  ngOnInit(): void {
    this._elementRef.nativeElement.classList.add('box', 'glass');
  }
}
