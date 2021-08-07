import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { LoadService } from '../../services/load.service';

/**
 * Component for Loader
 */
@Component({
  selector: 'load-loader',
  templateUrl: './load-loader.component.html',
  styleUrls: ['./load-loader.component.scss'],
})
export class LoadLoaderComponent implements OnInit, AfterViewInit {
  /**
   * Id of the loader
   */
  @Input('loaderId') loader_id = window.location.pathname;

  /**
   * Parent of the loaders
   */
  @ViewChild('loader_parent') loader_parent: ElementRef;

  /**
   * Index of the loader
   */
  loader_idx: number;

  /**
   * Constructor
   * @param loader Service for Loading
   * @param changes Service for ChangeDetection
   */
  constructor(public loader: LoadService, private changes: ChangeDetectorRef) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.loader_idx = Math.floor(Math.random() * 3);
    this.changes.detectChanges();
  }
}
