import { Component, Input, OnInit } from '@angular/core';
import { GlobalVariablesService } from 'src/app/libraries/util/services/global-variables.service';

@Component({
  selector: 'obj-notes-root',
  templateUrl: './obj-notes-root.component.html',
  styleUrls: ['./obj-notes-root.component.scss'],
})
export class ObjNotesRootComponent implements OnInit {
  @Input() fromDashboard: boolean;

  constructor(public gv: GlobalVariablesService) {}

  ngOnInit(): void {}
}
