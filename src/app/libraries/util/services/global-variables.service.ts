import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalVariablesService {
  unit_auto = 'max(calc(1em + 20vmin - 150px), 0px)';
  unit_large = '5rem';
  unit_normal = '2rem';
  unit_small = '1rem';
  unit_tiny = '0.5rem';

  constructor() {
    const style = (document.querySelector(':root') as HTMLElement).style;

    style.setProperty('--unit-auto', this.unit_auto);
    style.setProperty('--unit-large', this.unit_large);
    style.setProperty('--unit-normal', this.unit_normal);
    style.setProperty('--unit-small', this.unit_small);
    style.setProperty('--unit-tiny', this.unit_tiny);
  }
}
