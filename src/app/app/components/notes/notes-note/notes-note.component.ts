import { NoteModel } from './../../../models/note.model';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/libraries/authentication/services/auth.service';
import { DatabaseService } from 'src/app/libraries/util/services/database.service';
import { ActivatedRoute } from '@angular/router';
import { LoadService } from 'src/app/libraries/loading/services/load.service';

@Component({
  selector: 'app-notes-note',
  templateUrl: './notes-note.component.html',
  styleUrls: ['./notes-note.component.scss'],
})
export class NotesNoteComponent implements OnInit {
  note: NoteModel = {} as NoteModel;

  constructor(
    private auth: AuthService,
    private db: DatabaseService,
    private route: ActivatedRoute,
    public loader: LoadService
  ) {}

  ngOnInit(): void {
    this.loader.load();
    this.auth.sub_userData((data) => {
      if (data) {
        this.db
          .getNote(data.uid, this.route.snapshot.params['nid'])
          .subscribe((note) => {
            this.note = note;
            this.loader.unload();
          });
      }
    });
  }
}
