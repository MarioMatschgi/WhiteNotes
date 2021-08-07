import { Component, Input, OnInit } from '@angular/core';
import { Icons } from 'src/app/libraries/util/models/icons.model';
import { RouterUrls } from 'src/app/libraries/util/models/router.model';
import { RouterService } from 'src/app/libraries/util/services/router.service';

@Component({
  selector: 'objective-root',
  templateUrl: './objective-root.component.html',
  styleUrls: ['./objective-root.component.scss'],
})
export class ObjectiveRootComponent implements OnInit {
  @Input() icon: Icons;
  @Input() title: string;
  @Input() url: RouterUrls;
  @Input() fromDashboard: boolean;

  constructor(public router: RouterService) {}

  ngOnInit(): void {}
}
