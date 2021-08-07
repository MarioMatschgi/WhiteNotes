import { Component, OnInit, ViewChild } from '@angular/core';
import { NoteModel } from 'src/app/app/models/objectives/note.model';
import { GlobalVariablesService } from 'src/app/libraries/util/services/global-variables.service';
import { ObjectiveViewerComponent } from '../../base/objective-viewer/objective-viewer.component';

@Component({
  selector: 'obj-notes-viewer',
  templateUrl: './obj-notes-viewer.component.html',
  styleUrls: ['./obj-notes-viewer.component.scss'],
})
export class ObjNotesViewerComponent implements OnInit {
  @ViewChild('viewer') viewer: ObjectiveViewerComponent<NoteModel>;

  constructor(public gv: GlobalVariablesService) {}

  ngOnInit(): void {}
}
