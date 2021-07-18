import { NotesLoaderService } from './../../../services/notes-data-loader.service';
import { Component, OnInit } from '@angular/core';
import { NoteModel } from 'src/app/app/models/note.model';
import { AuthService } from 'src/app/libraries/authentication/services/auth.service';
import { RouterUrls } from 'src/app/libraries/util/models/router.model';
import { RouterService } from 'src/app/libraries/util/services/router.service';

@Component({
  selector: 'notes-dashboard',
  templateUrl: './notes-dashboard.component.html',
  styleUrls: ['./notes-dashboard.component.scss'],
})
export class NotesDashboardComponent implements OnInit {
  URLs = RouterUrls;
  notes: NoteModel[];

  constructor(
    public router: RouterService,
    private auth: AuthService,
    private notes_loader: NotesLoaderService
  ) {}

  ngOnInit(): void {
    this.auth.sub_userData(async (data) => {
      if (data) {
        this.notes_loader.getAllData(data.uid).subscribe((notes) => {
          this.notes = notes;
        });
      }
    }, true);
  }
}
