import { Component, OnInit, ViewChild } from '@angular/core';
import { NoteModel } from 'src/app/app/models/note.model';
import { LoaderServices } from 'src/app/app/services/data-load.service';
import { ObjectiveViewerComponent } from '../../base/objective-viewer/objective-viewer.component';

@Component({
  selector: 'obj-notes-viewer',
  templateUrl: './obj-notes-viewer.component.html',
  styleUrls: ['./obj-notes-viewer.component.scss'],
})
export class ObjNotesViewerComponent implements OnInit {
  LoaderServices = LoaderServices;

  @ViewChild('viewer') viewer: ObjectiveViewerComponent<NoteModel>;

  constructor() {}

  ngOnInit(): void {}
}
