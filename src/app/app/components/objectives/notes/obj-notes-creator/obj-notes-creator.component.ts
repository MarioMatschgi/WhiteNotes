import { Component, OnInit, ViewChild } from '@angular/core';
import { NoteModel } from 'src/app/app/models/note.model';
import { LoaderServices } from 'src/app/app/services/data-load.service';
import { ObjectiveCreatorComponent } from '../../base/objective-creator/objective-creator.component';

@Component({
  selector: 'obj-notes-creator',
  templateUrl: './obj-notes-creator.component.html',
  styleUrls: ['./obj-notes-creator.component.scss'],
})
export class ObjNotesCreatorComponent implements OnInit {
  LoaderServices = LoaderServices;

  @ViewChild('creator') creator: ObjectiveCreatorComponent<NoteModel>;

  constructor() {}

  ngOnInit(): void {}
}
