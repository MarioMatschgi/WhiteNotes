import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadLoaderComponent } from './components/load-loader/load-loader.component';

const components = [LoadLoaderComponent];

/**
 * Module for Loading
 */
@NgModule({
  declarations: components,
  imports: [CommonModule],
  exports: components,
})
export class LoadingModule {}
