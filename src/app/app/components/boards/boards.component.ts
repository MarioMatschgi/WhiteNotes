import { Component, OnInit } from '@angular/core';
import { Icons } from 'src/app/libraries/util/models/icons.model';

@Component({
  selector: 'boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss'],
})
export class BoardsComponent implements OnInit {
  Icons = Icons;

  constructor() {}

  ngOnInit(): void {}
}
