import {
  ContextMenuDirective,
  ContextMenuOpenDirective,
  ContextMenuOpenEventDirective,
} from './directives/context-menu.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickInsideOutsideDirective } from './directives/click-inside-outside.directive';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { FaComponent } from './components/fa/fa.component';
import { ContextMenuComponent } from './components/context-menu/context-menu.component';
import { FormsModule } from '@angular/forms';
import { SubmitDirective } from './directives/submit.directive';

const components = [
  ClickInsideOutsideDirective,
  ClickOutsideDirective,
  ContextMenuDirective,
  ContextMenuOpenDirective,
  ContextMenuOpenEventDirective,
  SubmitDirective,
  FaComponent,
  ContextMenuComponent,
];

/**
 * Module for Utilities
 */
@NgModule({
  declarations: components,
  imports: [CommonModule, FormsModule],
  exports: components,
})
export class UtilModule {}
