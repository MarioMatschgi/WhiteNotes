import { Component, OnInit } from '@angular/core';
import { LoadLoaderComponent } from '../load-loader/load-loader.component';

@Component({
  selector: 'load-loader-popover',
  templateUrl: './load-loader-popover.component.html',
  styleUrls: ['./load-loader-popover.component.scss'],
})
export class LoadLoaderPopoverComponent
  extends LoadLoaderComponent
  implements OnInit
{
  ngOnInit(): void {}
}
