import { RouterUrls } from './../../../libraries/util/models/router.model';
import { Component, OnInit } from '@angular/core';
import { RouterService } from 'src/app/libraries/util/services/router.service';
import { Icons } from 'src/app/libraries/util/models/icons.model';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  URLs = RouterUrls;
  Icons = Icons;

  constructor(public router: RouterService) {}

  ngOnInit(): void {}
}
