import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  isTouchDevice: boolean;

  constructor() {
    this.isTouchDevice = 'ontouchstart' in document.documentElement;
  }
}
