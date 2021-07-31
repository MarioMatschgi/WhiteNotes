import { Component, Input, OnInit } from '@angular/core';
import { Icons } from 'src/app/libraries/util/models/icons.model';

@Component({
  selector: 'objective-root',
  templateUrl: './objective-root.component.html',
  styleUrls: ['./objective-root.component.scss'],
})
export class ObjectiveRootComponent implements OnInit {
  @Input() icon: Icons;
  @Input() title: string;

  constructor() {}

  ngOnInit(): void {}
}
