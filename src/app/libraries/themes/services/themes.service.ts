import { Injectable } from '@angular/core';
import { AuthService } from '../../authentication/services/auth.service';
import { ThemeModel } from '../../util/models/theme.model';

/**
 * Service for Themes
 */
@Injectable({
  providedIn: 'root',
})
export class ThemesService {
  /**
   * Temporary transition value
   */
  private transition;

  /**
   * List of all theme colors and names
   */
  themes: ThemeModel[] = [
    { name: 'Sky&shy;blue', color: '#6cdbeb' },
    { name: 'Tomato&shy;red', color: '#eb6c6c' },
    { name: 'Pink', color: '#df6ceb' },
    { name: 'Purple', color: '#7b6ceb' },
    { name: 'Sea&shy;blue', color: '#6c8ceb' },
    { name: 'Turqouse', color: '#6ceba6' },
    { name: 'Green', color: '#6ceb71' },
    { name: 'Banana&shy;yellow', color: '#d6eb6c' },
    { name: 'Orange-orange', color: '#ebae6c' },
  ];

  constructor(public auth: AuthService) {
    const body = this.get_el('body');
    this.transition = getComputedStyle(body).getPropertyValue(
      '--tran-background-color'
    );
    body.style.setProperty('transition', 'none');

    this.auth.sub_userPrivateData(() => {
      this.switch_theme(
        this.themes[
          this.auth.userPrivateData?.theme < this.themes.length
            ? this.auth.userPrivateData.theme
            : 0
        ],
        false
      );
    });
  }

  /**
   * Returns an element by name
   * @param nam Name
   * @returns Returns an element by name
   */
  private get_el(nam: string): HTMLElement {
    return document.querySelector(nam) as HTMLElement;
  }

  /**
   * Switches to a Theme
   * @param theme Theme data to switch to
   * @param save Whether the Theme should be saved to private user data
   */
  switch_theme(theme: ThemeModel, save: boolean = true) {
    this.get_el(':root').style.setProperty('--color-background', theme.color);
    setTimeout(() => {
      this.get_el('body').style.setProperty('transition', this.transition);
    });

    if (save) {
      this.auth.userPrivateData.theme = this.themes.indexOf(theme);
      this.auth.doc_userPrivate.set(
        { theme: this.auth.userPrivateData.theme },
        { merge: true }
      );
    }
  }
}
