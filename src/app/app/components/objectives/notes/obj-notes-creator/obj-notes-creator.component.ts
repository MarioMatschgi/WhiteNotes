import { Component, OnInit, ViewChild } from '@angular/core';
import { NoteModel } from 'src/app/app/models/note.model';
import { GlobalVariablesService } from 'src/app/libraries/util/services/global-variables.service';
import { ObjectiveCreatorComponent } from '../../base/objective-creator/objective-creator.component';

@Component({
  selector: 'obj-notes-creator',
  templateUrl: './obj-notes-creator.component.html',
  styleUrls: ['./obj-notes-creator.component.scss'],
})
export class ObjNotesCreatorComponent implements OnInit {
  @ViewChild('creator') creator: ObjectiveCreatorComponent<NoteModel>;

  constructor(public gv: GlobalVariablesService) {}

  ngOnInit(): void {}
}
