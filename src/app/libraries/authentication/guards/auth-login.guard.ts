import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { RouterService } from '../../util/services/router.service';
import { AuthService } from '../services/auth.service';

/**
 * Guard for authentication
 */
@Injectable({
  providedIn: 'root',
})
export class AuthLoginGuard implements CanActivate {
  /**
   * Constructor
   * @param auth Service for Authentication
   * @param router Service for Routing
   */
  constructor(private auth: AuthService, private router: RouterService) {}

  /**
   * Can the user activate the page
   * @param route Route
   * @param state State
   * @returns Whether the user can open the page
   */
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (route.data.inverted) {
      if (!this.auth.loggedIn) {
        return true;
      }

      this.router.nav_login_back();
      return false;
    } else {
      if (this.auth.loggedIn) {
        return true;
      }

      this.router.nav_login(state.url);

      return false;
    }
  }
}
