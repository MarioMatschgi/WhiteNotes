import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ObjectiveModel } from 'src/app/app/models/objectives/objective.model';
import { DataLoadService } from 'src/app/app/services/data-load.service';
import { AuthService } from 'src/app/libraries/authentication/services/auth.service';
import { LoadService } from 'src/app/libraries/loading/services/load.service';
import { RouterUrls } from 'src/app/libraries/util/models/router.model';
import { GlobalVariablesService } from 'src/app/libraries/util/services/global-variables.service';
import { RouterService } from 'src/app/libraries/util/services/router.service';

export type EditorType = 'add' | 'edit';

@Component({
  selector: 'objective-editor',
  templateUrl: './objective-editor.component.html',
  styleUrls: ['./objective-editor.component.scss'],
})
export class ObjectiveEditorComponent<T extends ObjectiveModel>
  implements OnInit
{
  objective: T;

  @Input() loaderType;
  @ViewChild('form') form: NgForm;
  @Input() mode: EditorType;
  @Input() routeViewObjective: RouterUrls;

  @Output() beforeAddChange = new EventEmitter<T>();
  @Output() beforeEditChange = new EventEmitter<T>();

  constructor(
    private auth: AuthService,
    private router: RouterService,
    private route: ActivatedRoute,
    public loadService: DataLoadService<T>,
    public loader: LoadService,
    public gv: GlobalVariablesService
  ) {}

  ngOnInit(): void {
    this.loadService.loaderType = this.loaderType;

    switch (this.mode) {
      case 'add':
        this.objective = {} as T;

        break;

      case 'edit':
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

        break;
    }
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
  async save() {
    if (!this.isFormValid()) return;

    this.loader.load();

    await this.loadService.updateData(this.objective);

    this.loader.unload();
  }

  isFormValid(): boolean {
    this.form.form.markAllAsTouched();
    return this.form.form.valid;
  }
}
