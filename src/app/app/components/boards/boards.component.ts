import { Component, OnInit } from '@angular/core';
import { GlobalVariablesService } from 'src/app/libraries/util/services/global-variables.service';

@Component({
  selector: 'boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss'],
})
export class BoardsComponent implements OnInit {
  constructor(public gv: GlobalVariablesService) {}

  ngOnInit(): void {}
}
