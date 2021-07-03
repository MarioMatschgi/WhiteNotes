import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickInsideOutsideDirective } from './directives/click-inside-outside.directive';
import { ClickOutsideDirective } from './directives/click-outside.directive';

const components = [ClickInsideOutsideDirective, ClickOutsideDirective];

/**
 * Module for Utilities
 */
@NgModule({
  declarations: components,
  imports: [CommonModule],
  exports: components,
})
export class UtilModule {}
