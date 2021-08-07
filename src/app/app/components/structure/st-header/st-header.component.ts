import { Component, OnInit } from '@angular/core';
import { Event, NavigationEnd } from '@angular/router';
import { GlobalVariablesService } from 'src/app/libraries/util/services/global-variables.service';
import { RouterService } from 'src/app/libraries/util/services/router.service';

@Component({
  selector: 'st-header',
  templateUrl: './st-header.component.html',
  styleUrls: ['./st-header.component.scss'],
})
export class StHeaderComponent implements OnInit {
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
