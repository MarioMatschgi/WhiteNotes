import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ObjectiveModel } from 'src/app/app/models/objectives/objective.model';
import { DataLoadService } from 'src/app/app/services/data-load.service';
import { LoadService } from 'src/app/libraries/loading/services/load.service';
import { RouterUrls } from 'src/app/libraries/util/models/router.model';
import { GlobalVariablesService } from 'src/app/libraries/util/services/global-variables.service';
import { RouterService } from 'src/app/libraries/util/services/router.service';

@Component({
  selector: 'objective-creator',
  templateUrl: './objective-creator.component.html',
  styleUrls: ['./objective-creator.component.scss'],
})
export class ObjectiveCreatorComponent<T extends ObjectiveModel>
  implements OnInit
{
  objective: T;

  @ViewChild('form') form: NgForm;

  @Input() loaderType;
  @Input() routeViewObjective: RouterUrls;
  @Input() displayName: RouterUrls;

  @Output() beforeAddChange = new EventEmitter<T>();

  constructor(
    public gv: GlobalVariablesService,
    private router: RouterService,
    public loadService: DataLoadService<T>,
    public loader: LoadService
  ) {}

  ngOnInit(): void {
    this.loadService.loaderType = this.loaderType;

    this.objective = {} as T;
  }

  cancel() {
    this.router.nav_backward();
  }
  async add() {
    if (!this.isFormValid()) return;

    this.loader.load();

    this.beforeAddChange.emit(this.objective);

    this.objective.id = await this.loadService.addData(this.objective);

    this.loader.unload();

    this.router.nav(this.routeViewObjective, [this.objective.id]);
  }

  isFormValid(): boolean {
    this.form.form.markAllAsTouched();
    return this.form.form.valid;
  }
}
