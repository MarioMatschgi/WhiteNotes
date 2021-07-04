import { RecipeData, RecipeHelper } from '../../../app/model/recipe.model';
import { Component, Input, OnInit } from '@angular/core';
import { RecipeModel } from 'src/app/app/model/recipe.model';
import { LocalizationService } from '../../util/services/localization.service';

/**
 * Component for ShareButtons
 */
@Component({
  selector: 'share-buttons',
  templateUrl: './share-buttons.component.html',
  styleUrls: ['./share-buttons.component.scss'],
})
export class ShareButtonsComponent implements OnInit {
  /**
   * Recipe to share
   */
  @Input() recipe: RecipeModel;

  /**
   * Current URL
   */
  @Input() url;

  /**
   * List of URL for sharing
   */
  base_urls: { [page: string]: string } = {
    email: 'mailto:?subject=%ttl%&body=%txt%',
    pinterest:
      'http://pinterest.com/pin/create/button/?url=%url%&description=%txt%',
    twitter: 'http://twitter.com/share?text=%txt%&url=%url%',
    facebook: 'http://www.facebook.com/sharer.php?u=%url%&p[title]=%txt%',
    tumblr:
      'http://www.tumblr.com/share/link?url=%url%&amp;name=%ttl%&amp;description=%txt%',
    linkedin:
      'http://www.linkedin.com/shareArticle?mini=true&url=%url%&title=%ttl%&summary=%txt%&source=Recipe4you',
  };

  /**
   * Name of the recipe
   */
  name: string;

  /**
   * Data of the recipe
   */
  recipeData: RecipeData;

  constructor(public local: LocalizationService) {}

  ngOnInit(): void {
    this.recipeData = RecipeHelper.getData(this.recipe);

    if (!this.url) this.url = window.location.href;

    this.name = this.recipeData.name;
  }

  /**
   * Returns the URL for the page
   * @param page Page to share to
   * @returns Returns the URL
   */
  get_url(page: string): string {
    return this.base_urls[page]
      .replaceAll('%txt%', this.local.data.lib.share.txt)
      .replaceAll('%ttl%', this.local.data.lib.share.ttl)
      .replaceAll('%nam%', this.name)
      .replaceAll('%url%', this.url);
  }

  /**
   * Copies the link to the clipboard
   */
  copy_link() {
    navigator.clipboard.writeText(this.url);
  }
}
