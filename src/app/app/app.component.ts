import { Component } from '@angular/core';
import { LoadService } from '../libraries/loading/services/load.service';
import { GlobalVariablesService } from '../libraries/util/services/global-variables.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Whitenotes';

  constructor(public gv: GlobalVariablesService, public loader: LoadService) {}
}
