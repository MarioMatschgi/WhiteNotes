import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  DocumentReference,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import {
  RecipeData,
  RecipeHelper,
  RecipeModel,
} from 'src/app/app/model/recipe.model';

/**
 * Service for Database
 */
@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  /**
   * Database path for recipes
   */
  path_recipes = 'recipes';

  /**
   * Collection of recipes
   */
  col_recipes: AngularFirestoreCollection<any>;

  /**
   * Collection of private user data
   */
  col_usersPrivate: AngularFirestoreCollection<any>;

  /**
   * Collection of public user data
   */
  col_usersPublic: AngularFirestoreCollection<any>;

  constructor(public db: AngularFirestore) {
    this.col_recipes = this.db.collection(this.path_recipes);
    this.col_usersPrivate = this.db.collection('users-private');
    this.col_usersPublic = this.db.collection('users-public');
  }

  /**
   * Returns all recipes
   * @returns Returns all recipes
   */
  get_all_recipes(): Observable<RecipeModel[]> {
    return this.col_recipes.valueChanges();
  }

  /**
   * Returns all recipes by uids
   * @param ids List of ids
   * @returns Returns all recipes by uids
   */
  get_recipes(ids: string[]) {
    for (let i = 0; i < ids.length; i++)
      if (!ids[i] || ids[i] == '') ids.splice(i, 1);

    return this.db
      .collection(this.path_recipes, (ref) =>
        ref.where(firebase.default.firestore.FieldPath.documentId(), 'in', ids)
      )
      .get();
  }

  /**
   * Returns recipes of a user
   * @param user_id Author's uid
   * @returns Returns recipes of a user
   */
  get_recipes_for(user_id: string) {
    return this.db
      .collection(this.path_recipes, (ref) =>
        ref.where('author', '==', user_id)
      )
      .get();
  }

  /**
   * Returns the recipe
   * @param id Recipe's uid
   * @returns Returns the recipe
   */
  get_recipe(id: string): Observable<RecipeModel> {
    return this.col_recipes.doc(id).valueChanges();
  }

  /**
   * Adds a recipe
   * @param data Recipe data to add
   * @returns Returns the added recipe
   */
  add_recipe(data: RecipeModel): Promise<DocumentReference<any>> {
    data = this.trim_recipe(data);

    return this.col_recipes.add(RecipeHelper.to_object(data));
  }

  /**
   * Edits a recipe
   * @param id Recipe's uid
   * @param newData New recipe's data
   */
  edit_recipe(id: string, newData: RecipeModel) {
    newData = this.trim_recipe(newData);

    this.col_recipes.doc(id).set(RecipeHelper.to_object(newData));
  }

  /**
   * Removes the recipe
   * @param id Uid of the recipe to remove
   */
  remove_recipe(id: string) {
    this.col_recipes.doc(id).delete();
  }

  /**
   * Trims the recipe
   * @param data Recipe data to trim
   * @returns Returns the trimmed recipe
   */
  trim_recipe(data: RecipeModel): RecipeModel {
    let newLangs: { [lang: string]: RecipeData } = {};
    for (const key of Object.keys(data.langs)) {
      if (data.langs[key].ingredients?.length <= 0)
        delete data.langs[key].ingredients;

      if (
        key != 'auto' &&
        data.langs[key] &&
        Object.keys(data.langs[key]).length > 0
      )
        newLangs[key] = data.langs[key];
    }

    data.langs = newLangs;

    return data;
  }
}
