import { Component, OnInit } from '@angular/core';
import { RouterUrls } from 'src/app/libraries/util/models/router.model';
import { GlobalVariablesService } from 'src/app/libraries/util/services/global-variables.service';
import { RouterService } from 'src/app/libraries/util/services/router.service';

@Component({
  selector: 'wn-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  URLs = RouterUrls;

  constructor(
    public gv: GlobalVariablesService,
    public router: RouterService
  ) {}

  ngOnInit(): void {}
}
