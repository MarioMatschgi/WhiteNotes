import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/libraries/authentication/services/auth.service';
import { RouterUrls } from 'src/app/libraries/util/models/router.model';
import { RouterService } from 'src/app/libraries/util/services/router.service';
import { Icons } from 'src/app/libraries/util/models/icons.model';
import { DataLoadService } from 'src/app/app/services/data-load.service';
import { Encryptable } from 'src/app/app/models/encryptable.model';

@Component({
  selector: 'objective-dashboard',
  templateUrl: './objective-dashboard.component.html',
  styleUrls: ['./objective-dashboard.component.scss'],
})
export class ObjectiveDashboardComponent<T extends Encryptable>
  implements OnInit
{
  URLs = RouterUrls;
  Icons = Icons;
  objectives: T[];

  @Input() loaderType;

  constructor(
    public router: RouterService,
    private auth: AuthService,
    public loadService: DataLoadService<T>
  ) {}

  ngOnInit(): void {
    this.loadService.loader_type = this.loaderType;

    this.auth.sub_userData(async (data) => {
      if (data) {
        this.loadService.getAllData().subscribe((objectives) => {
          this.objectives = objectives;
        });
      }
    }, true);
  }
}
