import { take } from 'rxjs/operators';
import {
  AuthData,
  Role,
  emptyUserPublicData,
  UserPrivateData,
  UserPublicData,
  emptyUserPrivateData,
} from '../models/user.model';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { EventEmitter, Injectable } from '@angular/core';

import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Subscription } from 'rxjs';
import { RouterService } from '../../util/services/router.service';
import { GlobalVariablesService } from '../../util/services/global-variables.service';

/**
 * Type for authentication error
 */
type Error = { code: string; message: string };

/**
 * Service for Authentication
 */
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  /**
   * Data for user
   */
  userData: firebase.User;

  /**
   * Data for private user
   */
  userPrivateData: UserPrivateData;

  /**
   * Data for public user
   */
  userPublicData: UserPublicData;

  /**
   * Event for changed user data
   */
  private changed_userData = new EventEmitter<firebase.User>();

  /**
   * Event for changed private user data
   */
  private changed_userPrivateData = new EventEmitter<UserPrivateData>();

  /**
   * Event for changed public user data
   */
  private changed_userPublicData = new EventEmitter<UserPublicData>();

  /**
   * Document for private user data
   */
  doc_userPrivate: AngularFirestoreDocument<any>;

  /**
   * Document for public user data
   */
  doc_userPublic: AngularFirestoreDocument<any>;

  /**
   * Returns the displayname or the email if no displayname was given
   * @returns The displayname or email for the current user
   */
  get displayName_or_email(): string {
    if (!this.userPublicData) return '';

    const displayName = this.userPublicData.displayName;
    const email = this.userPublicData.email;

    if (displayName == null || displayName == '') return email;
    else return displayName;
  }

  /**
   * Whether the user data is setup
   */
  private is_auth_setup = false;

  /**
   * Whether the private user data is setup
   */
  private is_userPrivate_setup = false;

  /**
   * Whether the public user data is setup
   */
  private is_userPublic_setup = false;

  /**
   * Setup for user data
   */
  private setup_event = new EventEmitter();

  /**
   * Setup for private user data
   */
  private setup_userPrivate_event = new EventEmitter<UserPrivateData>();

  /**
   * Setup for public user data
   */
  private setup_userPublic_event = new EventEmitter<UserPublicData>();

  /**
   * Subscription for private user data
   */
  private private_subscription: Subscription;
  /**
   * Subscription for public user data
   */
  private public_subscription: Subscription;

  /**
   * The current authentication error
   */
  error: { code: string; message: string } = undefined;

  /**
   * Returns the localized error
   * @param errors_data Error data
   * @returns Returns the localized error
   */
  get_localized_error(errors_data): string {
    if (!this.error) return '';
    if (Object.keys(errors_data).includes(this.error.code))
      return errors_data[this.error.code];

    return this.error.message;
  }

  /**
   * Constructor
   * @param afAuth Service for Firebase Authentication
   * @param router Service for Routing
   * @param db Service for Firestore
   */
  constructor(
    public afAuth: AngularFireAuth,
    private router: RouterService,
    private db: AngularFirestore,
    public gv: GlobalVariablesService
  ) {
    this.userPrivateData = {
      ...emptyUserPrivateData,
      ...JSON.parse(localStorage.getItem('userPrivateData')),
    };
    this.userPublicData = {
      ...emptyUserPublicData,
      ...JSON.parse(localStorage.getItem('userPublicData')),
    };
    this.userData = JSON.parse(localStorage.getItem('userData'));

    this.changed_userData.emit(this.userData);
    this.changed_userPrivateData.emit(this.userPrivateData);
    this.changed_userPublicData.emit(this.userPublicData);

    if (this.loggedIn) this.set_docs(this.userPublicData.uid);

    this.afAuth.authState.subscribe(async (user) => {
      // this.signOut();
      this.userData = user;
      localStorage.setItem('userData', JSON.stringify(user));
      this.changed_userData.emit(this.userData);

      if (user == null) {
        // USER LOGGED OUT

        this.userPrivateData = null;
        this.userPublicData = null;
        localStorage.setItem('userPrivateData', null);
        localStorage.setItem('userPublicData', null);

        this.changed_userPrivateData.emit(this.userPrivateData);
        this.changed_userPublicData.emit(this.userPublicData);

        this.private_subscription?.unsubscribe();
        this.public_subscription?.unsubscribe();
      } else {
        // USER IS LOGGED IN

        this.set_docs(user.uid);

        if (this.userPublicData == null) {
          // USER WAS NOT LOGGED IN BUT IS NOW

          if (!user.emailVerified)
            this.error = { code: 'auth/not-verified', message: '' };

          // IF THERE IS AN ERROR, CANCEL LOGIN
          if (this.error) {
            this.signOut(false);
            return;
          }

          let data = (await this.doc_userPublic
            .valueChanges()
            .pipe(take(1))
            .toPromise()) as Object;

          // not in database, create new user
          if (data == undefined) {
            data = {
              ...emptyUserPublicData,
              uid: user.uid,
              email: user.email,
              photoURL: user.photoURL,
              displayName: user.displayName,
            };

            await this.doc_userPublic.set(data);
          }

          this.userPublicData = { ...emptyUserPublicData, ...data };

          localStorage.setItem(
            'userPublicData',
            JSON.stringify(this.userPublicData)
          );

          this.successfullySignedIn(true);
        } else {
          // USER WAS LOGGED IN AND IS NOW AS WELL

          // UPDATE DATA
          this.userPublicData.uid = user.uid;

          // UPDATE USER DATA (Check for changes in email and profile image and update it in the database)
          let changes = false;
          if (!this.userPublicData.email_overridden) {
            this.userPublicData.email = user.email;
            changes = true;
          }
          if (!this.userPublicData.photoURL_overridden) {
            this.userPublicData.photoURL = user.photoURL;
            changes = true;
          }
          if (!this.userPublicData.displayName_overridden) {
            this.userPublicData.displayName = user.displayName;
            changes = true;
          }

          // Push to database
          if (changes) {
            this.doc_userPublic.set(this.userPublicData, { merge: true });
          }
          localStorage.setItem(
            'userPublicData',
            JSON.stringify(this.userPublicData)
          );

          this.successfullySignedIn(false);
        }
      }

      //
      if (!this.is_auth_setup) this.setup_event.emit();
      this.is_auth_setup = true;

      //

      if (this.loggedIn) {
        // userPublicData
        this.public_subscription = this.doc_userPublic
          .valueChanges()
          .subscribe((data) => {
            if (this.userPublicData.photoURL_overridden)
              this.userPublicData.photoURL = data['photoURL'];
            if (this.userPublicData.displayName_overridden)
              this.userPublicData.displayName = data['displayName'];

            this.userPublicData.role = data['role'];

            if (!this.is_userPublic_setup)
              this.setup_userPublic_event.emit(this.userPublicData);
            this.is_userPublic_setup = true;

            // SAVE DATA TO LOCALSTORAGE
            if (data)
              localStorage.setItem(
                'userPublicData',
                JSON.stringify(this.userPublicData)
              );
            else localStorage.setItem('userPublicData', null);
          });

        // userPrivateData
        this.private_subscription = this.doc_userPrivate
          .valueChanges()
          .subscribe((data: Object) => {
            this.userPrivateData = { ...emptyUserPrivateData, ...data };

            this.changed_userPrivateData.emit(this.userPrivateData);
            this.changed_userPublicData.emit(this.userPublicData);

            if (!this.is_userPrivate_setup)
              this.setup_userPrivate_event.emit(this.userPrivateData);
            this.is_userPrivate_setup = true;

            // SAVE DATA TO LOCALSTORAGE
            if (data)
              localStorage.setItem(
                'userPrivateData',
                JSON.stringify(this.userPrivateData)
              );
            else localStorage.setItem('userPrivateData', null);
          });
      }
    });
  }

  /*
    DATA
  */
  /**
   * Sets the docs for the given user
   * @param uid Uid of the user
   */
  set_docs(uid: string) {
    this.doc_userPrivate = this.db.collection('users-private').doc(uid);
    this.doc_userPublic = this.db.collection('users-public').doc(uid);
  }

  /**
   * Subscribes to the user data and calls the function when data is set
   * @param func Callback
   */
  sub_userData(
    func: (data: firebase.User) => void,
    skip_first: boolean = false
  ) {
    if (!skip_first || this.is_auth_setup) func(this.userData);
    this.changed_userData.subscribe((data) => {
      func(data);
    });
  }

  /**
   * Subscribes to the private user data and calls the function when data is set
   * @param func Callback
   */
  sub_userPrivateData(
    func: (data: UserPrivateData) => void,
    skip_first: boolean = false
  ) {
    if (!skip_first || this.is_auth_setup) func(this.userPrivateData);
    this.changed_userPrivateData.subscribe((data) => {
      func(data);
    });
  }

  /**
   * Subscribes to the public user data and calls the function when data is set
   * @param func Callback
   */
  sub_userPublicData(
    func: (data: UserPublicData) => void,
    skip_first: boolean = false
  ) {
    if (!skip_first || this.is_auth_setup) func(this.userPublicData);
    this.changed_userPublicData.subscribe((data) => {
      func(data);
    });
  }

  /*
    ERROR
  */
  /**
   * Returns the localized error for the given error
   * @param error The error
   * @returns Returns the error
   */
  get_error({ code, message }: Error): Error {
    return { code: code, message: this.get_error_msg(code) || message };
  }

  /**
   * Returns the error for the given error code
   * @param code The code of the error
   * @returns Returns the error
   */
  get_error_by_code(code: string): Error {
    return { code: code, message: this.get_error_msg(code) };
  }

  /**
   * Returns the error message for the given error code
   * @param code The code of the error
   * @returns Returns the message
   */
  get_error_msg(code: string): string {
    let msg = undefined;
    switch (code) {
      case 'auth/too-many-requests':
        msg =
          'The login was tried too often, please try again later or reset your password!';
        break;
      case 'auth/user-not-found':
        msg = 'The username or password is wrong!';
        break;
      case 'auth/form-invalid':
        msg = 'The form is not valid!';
        break;
    }
    return msg;
  }

  /*
    USER STUFF
  */
  /**
   * Returns whether the user is the author or an admin
   * @returns Whether the user is the author or an admin
   */
  is_author_or_admin(author): boolean {
    return this.is_author(author) || this.is_admin();
  }

  /**
   * Returns whether the user is the author
   * @returns Whether the user is the author
   */
  is_author(author): boolean {
    return this.is_user(author);
  }

  /**
   * Returns whether the user is an admin
   * @returns Whether the user is an admin
   */
  is_admin(): boolean {
    return this.loggedIn && this.userPublicData.role == Role.admin;
  }

  /**
   * Returns the displayname or the email if no displayname was given
   * @param uid Uid of the user
   * @returns The displayname or email for the given user
   */
  async get_displayname_or_email(uid: string): Promise<string> {
    const d = await this.db
      .collection('users-public')
      .doc(uid)
      .valueChanges()
      .pipe(take(1))
      .toPromise();

    if (d['displayName'] == null || d['displayName'] == '') return d['email'];
    else return d['displayName'];
  }

  /**
   * Returns `true` if a user with the id exists
   * @param id Uid of the user to check
   * @returns Whether a user with the given id exists
   */
  is_user(id: string): boolean {
    if (!this.loggedIn) return false;

    return this.userPublicData.uid === id;
  }

  /**
   * Returns `true` if the user is logged in
   */
  get loggedIn(): boolean {
    return (
      this.userPublicData !== null &&
      this.userPublicData.uid != '' &&
      this.userData?.emailVerified
    );
  }

  /*
    SIGNIN STUFF
   */
  /**
   * Resets the error and navigates back
   * @param redir Whether the user should be redirected back
   */
  private successfullySignedIn(redir: boolean) {
    this.error = undefined;

    if (redir) this.router.nav_login_back();
  }

  /**
   * Signs in with google
   */
  async signIn_google() {
    return await this.afAuth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((result) => {
        // this.successfullySignedIn('google');
      })
      .catch((error) => {
        this.error = this.get_error(error);
      });
  }

  /**
   * Signs in with email
   * @param email Email to sign up with
   * @param password Password to sign up with
   */
  async signIn_email(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        // this.successfullySignedIn('email');
      })
      .catch((error) => {
        this.error = this.get_error(error);
      });
  }

  /*
    SIGNUP STUFF
  */
  /**
   * Signs up with email
   * @param email Email to sign up with
   * @param password Password to sign up with
   * @param confirm_password Confimation password
   */
  async signUp_email(email, password, confirm_password) {
    if (confirm_password != password) {
      this.error = { code: 'auth/password-no-match', message: '' };
      return;
    }

    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.send_verification_mail();
      })
      .catch((err) => {
        if (err.code == 'auth/not-verified') return;
        this.error = err;
      });
  }

  /**
   * Sends an email verfificaiton when new user sign up
   */
  send_verification_mail() {
    return this.afAuth.currentUser
      .then((u) => u.sendEmailVerification())
      .then(() => {
        this.router.nav_verify_email();
      })
      .catch((err) => {
        if (err.code == 'auth/not-verified') return;

        if (err.code == 'auth/too-many-requests')
          err.code = 'auth/too-many-verify-email';
        this.error = err;
      });
  }

  /**
   * Sends the password reset email
   * @param email Email to send the mail to
   */
  send_reset_password_email(email: string) {
    return this.afAuth.sendPasswordResetEmail(email).then(
      () => {},
      (error) => {
        this.error = this.get_error(error);
      }
    );
  }

  /**
   * Signs out the current user
   * @param redir Whether the user should be redirected afterwards
   */
  async signOut(redir = true) {
    this.error = undefined;
    await this.afAuth.signOut();
    if (redir) this.router.nav(this.gv.URLs.home);
  }
}
