import { Component, OnInit } from '@angular/core';
import { Icons } from 'src/app/libraries/util/models/icons.model';

@Component({
  selector: 'notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})
export class NotesComponent implements OnInit {
  Icons = Icons;

  constructor() {}

  ngOnInit(): void {}
}
