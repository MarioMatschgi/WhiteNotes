import { Component, OnInit } from '@angular/core';
import { Icons } from 'src/app/libraries/util/models/icons.model';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  Icons = Icons;

  constructor() {}

  ngOnInit(): void {}
}
