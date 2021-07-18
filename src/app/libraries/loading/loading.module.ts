import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadLoaderComponent } from './components/load-loader/load-loader.component';
import { LoadLoaderPopoverComponent } from './components/load-loader-popover/load-loader-popover.component';
import { PopoverModule } from '../popover/popover.module';

const components = [LoadLoaderComponent, LoadLoaderPopoverComponent];

/**
 * Module for Loading
 */
@NgModule({
  declarations: components,
  imports: [CommonModule, PopoverModule],
  exports: components,
})
export class LoadingModule {}
