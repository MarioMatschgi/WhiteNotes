import { Injectable } from '@angular/core';
import * as data_en from '../../../lang/english.json';
import * as data_de from '../../../lang/german.json';
import { AuthService } from '../../authentication/services/auth.service';

/**
 * Service for Localization
 */
@Injectable({
  providedIn: 'root',
})
export class LocalizationService {
  /**
   * Current language
   */
  lang: string;

  /**
   * Current language data
   */
  data: typeof data_en;

  /**
   * Dictionary with all language datas
   */
  langs: { [lang: string]: typeof data_en } = {};

  /**
   * List of all languages
   */
  lang_list: string[];

  constructor(public auth: AuthService) {
    this.langs['en'] = this.getLangData(data_en);
    this.langs['de'] = this.getLangData(data_de);
    this.lang_list = Object.keys(this.langs);

    this.auth.sub_userPrivateData(() => {
      this.update_lang(this.get_lang());
    });
  }

  /**
   * Updates the language
   * @param lang New language
   */
  update_lang(lang: string) {
    this.lang = lang;
    // RecipeHelper.lang = this.get_eval_lang(this.lang);

    this.data = this.langs[this.lang] || this.langs['en'];
  }

  /**
   * Returns the current language
   * @returns Returns the current language
   */
  get_lang(): string {
    let lang = this.auth.userPrivateData?.lang;

    if (!lang || lang == '' || lang == 'auto')
      lang = window.navigator.language.substr(0, 2);

    return lang;
  }

  /**
   * Returns the given and evaluated language
   * @param lang Language to evaluate
   * @returns Returns the given and evaluated language
   */
  get_eval_lang(lang: string): string {
    if (!lang || lang == '' || lang == 'auto')
      return window.navigator.language.substr(0, 2);
    return lang;
  }

  /**
   * Fuses the language data with english data for a given language
   * @param data Language data to fuse
   * @returns Returns the language data fused with english data for a given language
   */
  getLangData(data) {
    return {
      ...this.langs['en'],
      ...(data as any).default,
    };
  }
}
