import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/libraries/authentication/services/auth.service';
import { RouterUrls } from 'src/app/libraries/util/models/router.model';
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
  RouterUrls = RouterUrls;
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
    public local: LocalizationService
  ) {}

  ngOnInit(): void {}
}
