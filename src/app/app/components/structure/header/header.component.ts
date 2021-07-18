import { Icons } from './../../../../libraries/util/models/icons.model';
import { Component, OnInit } from '@angular/core';
import { Event, NavigationEnd } from '@angular/router';
import { RouterUrls } from 'src/app/libraries/util/models/router.model';
import { GlobalVariablesService } from 'src/app/libraries/util/services/global-variables.service';
import { RouterService } from 'src/app/libraries/util/services/router.service';

@Component({
  selector: 'wn-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class StHeaderComponent implements OnInit {
  URLs = RouterUrls;
  Icons = Icons;

  nav_title: string;

  constructor(public gv: GlobalVariablesService, public router: RouterService) {
    router.router.events.subscribe((evt: Event) => {
      if (evt instanceof NavigationEnd) {
        const route = evt.url.substring(1).split('/')[0];

        if (route == '') {
          this.nav_title = 'Whitenotes';
        } else {
          this.nav_title = route.charAt(0).toUpperCase() + route.substring(1);
        }
      }
    });
  }

  ngOnInit(): void {}
}
