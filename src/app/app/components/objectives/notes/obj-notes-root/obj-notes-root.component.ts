import { Component, OnInit } from '@angular/core';
import { Icons } from 'src/app/libraries/util/models/icons.model';

@Component({
  selector: 'obj-notes-root',
  templateUrl: './obj-notes-root.component.html',
  styleUrls: ['./obj-notes-root.component.scss'],
})
export class ObjNotesRootComponent implements OnInit {
  Icons = Icons;

  constructor() {}

  ngOnInit(): void {}
}
