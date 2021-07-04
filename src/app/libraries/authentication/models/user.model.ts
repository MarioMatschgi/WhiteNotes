/**
 * Data for Authentication
 */
export interface AuthData {
  /**
   * Unique id of the user
   */
  readonly uid: string;

  /**
   * Email of the user
   */
  readonly email: string;

  /**
   * PhotoURL of the user
   */
  readonly photoURL?: string;

  /**
   * Displayed name of the user
   */
  readonly displayName?: string;
}

/**
 * Enum for roles
 */
export enum Role {
  /**
   * No role
   */
  none = 'none',

  /**
   * Admin role
   */
  admin = 'admin',
}

/**
 * Empty Data for private user data
 */
export const emptyUserPrivateData: UserPrivateData = {
  bookmarks: [''],
  lang: 'auto',
  theme: 0,
};

/**
 * Private user data
 */
export interface UserPrivateData {
  /**
   * Bookmarks of the user
   */
  bookmarks: [string];

  /**
   * Language of the user
   */
  lang: string;

  /**
   * Theme of the user
   */
  theme: number;
}

/**
 * Empty Data for public user data
 */
export const emptyUserPublicData: UserPublicData = {
  uid: '',
  email: '',
  photoURL: '',
  displayName: '',
  role: Role.none,
};

/**
 * Public user data
 */
export interface UserPublicData {
  /**
   * Unique id of the user
   */
  uid: string;

  /**
   * Whether the email is overridden
   */
  email_overridden?;

  /**
   * Email of the user
   */
  email: string;

  /**
   * Whether the photoURL is overridden
   */
  photoURL_overridden?;
  /**
   * PhotoURL of the user
   */
  photoURL: string;

  /**
   * Whether the displayName is overridden
   */
  displayName_overridden?;

  /**
   * Displayed name of the user
   */
  displayName: string;

  /**
   * Role of the user
   */
  role: Role;
}
