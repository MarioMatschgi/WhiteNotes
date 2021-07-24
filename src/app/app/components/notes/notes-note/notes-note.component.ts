import { NoteModel } from './../../../models/note.model';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/libraries/authentication/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { LoadService } from 'src/app/libraries/loading/services/load.service';
import { NotesLoaderService } from 'src/app/app/services/notes-data-loader.service';

@Component({
  selector: 'app-notes-note',
  templateUrl: './notes-note.component.html',
  styleUrls: ['./notes-note.component.scss'],
})
export class NotesNoteComponent implements OnInit {
  note: NoteModel = {} as NoteModel;

  constructor(
    private auth: AuthService,
    private notes_loader: NotesLoaderService,
    private route: ActivatedRoute,
    public loader: LoadService
  ) {}

  ngOnInit(): void {
    this.loader.load();
    this.auth.sub_userData((data) => {
      if (data) {
        this.notes_loader
          .getData(this.route.snapshot.params['nid'])
          .subscribe((note) => {
            this.note = note;
            this.loader.unload();
          });
      }
    });
  }
}
