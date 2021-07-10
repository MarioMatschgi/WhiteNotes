import { Component, ElementRef, Input, OnInit } from '@angular/core';

type StFxDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';

type StFxWrap = 'nowrap' | 'wrap' | 'wrap-reverse';

type StFxJustifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'start'
  | 'end'
  | 'left'
  | 'right';

type StFxAlignItems =
  | 'stretch'
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'baseline'
  | 'first baseline'
  | 'last baseline'
  | 'start'
  | 'end'
  | 'self-start'
  | 'self-end';

type StFxAlignContent =
  | 'normal'
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch'
  | 'start'
  | 'end'
  | 'baseline'
  | 'first baseline'
  | 'last baseline';

@Component({
  selector: 'st-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class StGridComponent implements OnInit {
  private _fx_min_width: string = 'none';
  @Input('fx-min-width')
  set fx_min_width(val: string) {
    this._fx_min_width = val;
    this.setVal('--fx-min-width', val);
  }
  get fx_min_width(): string {
    return this._fx_min_width;
  }
  private _fx_min_height: string = 'none';
  @Input('fx-min-height')
  set fx_min_height(val: string) {
    this._fx_min_height = val;
    this.setVal('--fx-min-height', val);
  }
  get fx_min_height(): string {
    return this._fx_min_height;
  }
  private _fx_max_width: string = 'none';
  @Input('fx-max-width')
  set fx_max_width(val: string) {
    this._fx_max_width = val;
    this.setVal('--fx-max-width', val);
  }
  get fx_max_width(): string {
    return this._fx_max_width;
  }
  private _fx_max_height: string = 'none';
  @Input('fx-max-height')
  set fx_max_height(val: string) {
    this._fx_max_height = val;
    this.setVal('--fx-max-height', val);
  }
  get fx_max_height(): string {
    return this._fx_max_height;
  }

  @Input('fx-direction') fx_direction: StFxDirection = 'row';
  @Input('fx-wrap') fx_wrap: StFxWrap = 'wrap';

  private _fx: string = '';
  @Input('fx')
  set fx(val: string) {
    this._fx = val;
    const vals = val.split(' ');
    this.fx_grow = +vals[0];
    this.fx_shrink = +vals[1];
    this.fx_basis = vals[2];
  }
  get fx(): string {
    return this._fx == ''
      ? this.fx_grow + ' ' + this.fx_shrink + '' + this.fx_basis
      : this._fx;
  }
  private _fx_grow: number = 0;
  @Input('fx-grow')
  set fx_grow(val: number) {
    this._fx_grow = val;
    this.setVal('--fx-grow', val);
  }
  get fx_grow(): number {
    return this._fx_grow;
  }
  private _fx_shrink: number = 1;
  @Input('fx-shrink')
  set fx_shrink(val: number) {
    this._fx_shrink = val;
    this.setVal('--fx-shrink', val);
  }
  get fx_shrink(): number {
    return this._fx_shrink;
  }
  private _fx_basis: string = 'auto';
  @Input('fx-basis')
  set fx_basis(val: string) {
    this._fx_basis = val;
    this.setVal('--fx-basis', val);
  }
  get fx_basis(): string {
    return this._fx_basis;
  }

  @Input('fx-justify-content') fx_justify_content: StFxJustifyContent =
    'flex-start';
  @Input('fx-align-items') fx_align_items: StFxAlignItems = 'stretch';
  @Input('fx-align-content') fx_align_content: StFxAlignContent = 'normal';

  constructor(private _elementRef: ElementRef) {}

  ngOnInit(): void {}

  private setVal(key: string, val) {
    this._elementRef.nativeElement.style.setProperty(key, val);
  }
}
