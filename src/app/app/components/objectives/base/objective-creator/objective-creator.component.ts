import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Encryptable } from 'src/app/app/models/encryptable.model';
import { DataLoadService } from 'src/app/app/services/data-load.service';
import { AuthService } from 'src/app/libraries/authentication/services/auth.service';
import { LoadService } from 'src/app/libraries/loading/services/load.service';

@Component({
  selector: 'objective-creator',
  templateUrl: './objective-creator.component.html',
  styleUrls: ['./objective-creator.component.scss'],
})
export class ObjectiveCreatorComponent<T extends Encryptable>
  implements OnInit
{
  objective: T;

  @Input() loaderType;

  constructor(
    private auth: AuthService,
    private route: ActivatedRoute,
    public loadService: DataLoadService<T>,
    public loader: LoadService
  ) {}

  ngOnInit(): void {
    this.loader.load();
    this.loadService.loaderType = this.loaderType;

    this.auth.sub_userData(async (data) => {
      if (data) {
        this.loadService
          .getData(this.route.snapshot.params['oid'])
          .subscribe((objective) => {
            this.objective = objective;

            this.loader.unload();
          });
      }
    }, true);
  }
}
