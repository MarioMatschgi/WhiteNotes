import { Component } from '@angular/core';
import { GlobalVariablesService } from '../libraries/util/services/global-variables.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Whitenotes';

  constructor(public gv: GlobalVariablesService) {}
}
