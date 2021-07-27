import { Component, OnInit, ViewChild } from '@angular/core';
import { NoteModel } from 'src/app/app/models/note.model';
import { LoaderServices } from 'src/app/app/services/data-load.service';
import { RouterUrls } from 'src/app/libraries/util/models/router.model';
import { RouterService } from 'src/app/libraries/util/services/router.service';
import { ObjectiveDashboardComponent } from '../../base/objective-dashboard/objective-dashboard.component';

@Component({
  selector: 'app-notes-dashboard',
  templateUrl: './notes-dashboard.component.html',
  styleUrls: ['./notes-dashboard.component.scss'],
})
export class NotesDashboardComponent implements OnInit {
  LoaderServices = LoaderServices;
  URLs = RouterUrls;

  @ViewChild('dashboard') dashboard: ObjectiveDashboardComponent<NoteModel>;

  constructor(public router: RouterService) {}

  ngOnInit(): void {}
}
