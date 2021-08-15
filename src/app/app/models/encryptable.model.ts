import { Identifiable } from './identifiable.model';
import * as CryptoJS from 'crypto-js';

export class Encryptable extends Identifiable {}

/**
 * Encrypts and decrypts every property except the id
 */
export class Endecryptor {
  private static pw = 'AHdajashdgajhdgjGJDASHJADjadjghasjhdg';

  static encryptSingle(str: string): string {
    return CryptoJS.AES.encrypt(str, this.pw).toString();
  }

  static decryptSingle(str: string): string {
    return CryptoJS.AES.decrypt(str, this.pw).toString(CryptoJS.enc.Utf8);
  }

  static encrypt<T extends Encryptable>(data: T): T {
    let d = { ...data };
    for (const key of Object.keys(d)) {
      if (key != 'id') {
        if (Array.isArray(d[key])) {
          d[key] = this.encryptAll(d[key]);
        } else if (d[key] instanceof Object) {
          d[key] = this.encrypt(d[key]);
        } else {
          d[key] = this.encryptSingle(d[key] + '');
        }
      }
    }

    return d;
  }

  static decrypt<T extends Encryptable>(data: T): T {
    let d = { ...data };
    for (const key of Object.keys(d)) {
      if (key != 'id') {
        if (Array.isArray(d[key])) {
          d[key] = this.decryptAll(d[key]);
        } else if (d[key] instanceof Object) {
          d[key] = this.decrypt(d[key]);
        } else {
          d[key] = this.decryptSingle(d[key]);
        }
      }
    }

    return d;
  }

  static encryptAll<T extends Encryptable>(data: T[]): T[] {
    let d = [...data];
    for (let i = 0; i < d.length; i++) {
      d[i] = this.encrypt(d[i]);
    }

    return d;
  }

  static decryptAll<T extends Encryptable>(data: T[]): T[] {
    let d = [...data];
    for (let i = 0; i < d.length; i++) {
      d[i] = this.decrypt(d[i]);
    }

    return d;
  }
}
