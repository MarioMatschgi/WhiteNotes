import { Component, OnInit, ViewChild } from '@angular/core';
import { NoteModel } from 'src/app/app/models/objectives/note.model';
import { GlobalVariablesService } from 'src/app/libraries/util/services/global-variables.service';
import { RouterService } from 'src/app/libraries/util/services/router.service';
import { ObjectiveDashboardComponent } from '../../base/objective-dashboard/objective-dashboard.component';

@Component({
  selector: 'obj-notes-dashboard',
  templateUrl: './obj-notes-dashboard.component.html',
  styleUrls: ['./obj-notes-dashboard.component.scss'],
})
export class ObjNotesDashboardComponent implements OnInit {
  @ViewChild('dashboard') dashboard: ObjectiveDashboardComponent<NoteModel>;

  constructor(
    public router: RouterService,
    public gv: GlobalVariablesService
  ) {}

  ngOnInit(): void {}
}
