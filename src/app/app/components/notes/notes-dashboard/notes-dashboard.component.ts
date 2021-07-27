import { Component, OnInit } from '@angular/core';
import { NoteModel } from 'src/app/app/models/note.model';
import { AuthService } from 'src/app/libraries/authentication/services/auth.service';
import { RouterUrls } from 'src/app/libraries/util/models/router.model';
import { RouterService } from 'src/app/libraries/util/services/router.service';
import { Icons } from 'src/app/libraries/util/models/icons.model';
import {
  DataLoadService,
  LoaderServices,
} from 'src/app/app/services/data-load.service';

@Component({
  selector: 'notes-dashboard',
  templateUrl: './notes-dashboard.component.html',
  styleUrls: ['./notes-dashboard.component.scss'],
})
export class NotesDashboardComponent implements OnInit {
  URLs = RouterUrls;
  Icons = Icons;
  notes: NoteModel[];

  constructor(
    public router: RouterService,
    private auth: AuthService,
    private data_loader: DataLoadService<NoteModel>
  ) {
    data_loader.loader_type = LoaderServices.note;
  }

  ngOnInit(): void {
    this.auth.sub_userData(async (data) => {
      if (data) {
        this.data_loader.getAllData().subscribe((notes) => {
          this.notes = notes;
        });
      }
    }, true);
  }
}
