import { Icons } from './../../../../../libraries/util/models/icons.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'obj-todos-root',
  templateUrl: './obj-todos-root.component.html',
  styleUrls: ['./obj-todos-root.component.scss'],
})
export class ObjTodosRootComponent implements OnInit {
  Icons = Icons;

  constructor() {}

  ngOnInit(): void {}
}
