import { Injectable } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { Location } from '@angular/common';
import { RouterUrls } from '../models/router.model';

/**
 * Service for Routing
 */
@Injectable({
  providedIn: 'root',
})
export class RouterService {
  /**
   * Key for router location in localStorage
   */
  private k_loc = 'router.loc';
  /**
   * Key for login location in localStorage
   */
  private k_login_loc = 'router.auth.login.loc';

  /**
   * Whether the page was loaded
   */
  private loaded = false;

  /**
   * Returns the url for the given RouterUrl and the params
   * @param url The RouterUrl
   * @param params The params
   * @returns Returns the url for the given RouterUrl and the params
   */
  get_url(url: RouterUrls, params: string[] = []): string {
    return '/' + url + '/' + params.join('/');
  }

  /**
   * Returns the url as an array for the given RouterUrl and the given params
   * @param url The RouterUrl
   * @param params The params
   * @returns Returns the url as an array for the given RouterUrl and the given params
   */
  get_url_arr(url: RouterUrls, params: string[] = []): string[] {
    return this.get_url(url, params).substr(1).split('/');
  }

  constructor(public router: Router, public location: Location) {
    if (window.matchMedia('(display-mode: standalone)').matches)
      router.events.subscribe((e: Event) => {
        if (e instanceof NavigationEnd) {
          if (!this.loaded) {
            if (e.url == '/') this.nav_old();
            this.loaded = true;
          }
          localStorage.setItem(this.k_loc, e.url);
        }
      });
  }

  /**
   * Navigates to the given RouterUrl and the given params
   * @param url
   * @param params
   */
  nav(url: RouterUrls, params: string[] = []) {
    this.router.navigate(this.get_url_arr(url, params));
  }

  /**
   * Navigates to the page of the previous session
   */
  private nav_old() {
    const url = localStorage.getItem(this.k_loc);
    if (url) this.router.navigate([url]);
  }

  /**
   * Navigates backwards
   */
  nav_backward() {
    this.location.back();
  }

  /**
   * Navigates forwards
   */
  nav_forward() {
    this.location.forward();
  }

  /**
   * Navigates to the login page
   */
  nav_login(url: string = this.router.url) {
    localStorage.setItem(this.k_login_loc, url);

    this.router.navigate(['auth/login']);
  }

  /**
   * Navigates to the page before the login page
   */
  nav_login_back() {
    let route = localStorage.getItem(this.k_login_loc);
    if (route == null || route == '/') route = '';

    this.router.navigate(route.split('/'));
  }

  /**
   * Navigates to the register page
   */
  nav_register(url: string = this.router.url) {
    localStorage.setItem(this.k_login_loc, url);

    this.router.navigate(['auth/register']);
  }

  /**
   * Navigates to the reset password page
   */
  nav_reset(url: string = this.router.url) {
    localStorage.setItem(this.k_login_loc, url);

    this.router.navigate(['auth/reset-password']);
  }

  /**
   * Navigates to the verify email page
   */
  nav_verify_email(url: string = this.router.url) {
    localStorage.setItem(this.k_login_loc, url);

    this.router.navigate(['auth/verify-email']);
  }
}
