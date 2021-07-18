import { Component, Input, OnInit } from '@angular/core';

type FaType =
  | 'd'
  | 'r'
  | 'l'
  | 's'
  | 'b'
  | 'd'
  | 'regular'
  | 'light'
  | 'solid'
  | 'brand'
  | 'far'
  | 'fal'
  | 'fas'
  | 'fab'
  | 'fa-regular'
  | 'fa-light'
  | 'fa-solid'
  | 'fa-brand';

@Component({
  selector: 'fa',
  templateUrl: './fa.component.html',
  styleUrls: ['./fa.component.scss'],
})
export class FaComponent implements OnInit {
  @Input() fasize = 1;
  height: number;
  @Input() fastyle: FaType = 'r';
  @Input() fa: string;

  constructor() {}

  ngOnInit(): void {
    const spl = this.fa.split(' ');
    if (spl.length > 1) {
      this.fa = spl[0];
      this.fastyle = spl[1] as FaType;
    }

    this.fastyle = this.fastyle.replace('fa-', '').replace('fa', '') as FaType;
    if (this.fastyle.length > 1) {
      this.fastyle = this.fastyle.substr(0, 1) as FaType;
    }
    this.height = (1 - this.fasize) / 2 + 1;
  }
}
