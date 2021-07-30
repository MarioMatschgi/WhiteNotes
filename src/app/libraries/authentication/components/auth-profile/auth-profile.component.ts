import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/libraries/authentication/services/auth.service';
import { GlobalVariablesService } from 'src/app/libraries/util/services/global-variables.service';
import { LocalizationService } from 'src/app/libraries/util/services/localization.service';
import { RouterService } from 'src/app/libraries/util/services/router.service';

/**
 * Component for profile
 */
@Component({
  selector: 'auth-profile',
  templateUrl: './auth-profile.component.html',
  styleUrls: ['./auth-profile.component.scss'],
})
export class AuthProfileComponent implements OnInit {
  popover: boolean;

  /**
   * Constructor
   * @param auth Service for Authentication
   * @param router Service for Routing
   * @param local Service for Localization
   */
  constructor(
    public auth: AuthService,
    public router: RouterService,
    public local: LocalizationService,
    public gv: GlobalVariablesService
  ) {}

  ngOnInit(): void {}
}
