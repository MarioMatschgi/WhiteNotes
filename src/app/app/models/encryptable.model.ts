import { Identifiable } from './identifiable.model';
import * as CryptoJS from 'crypto-js';

export interface Encryptable extends Identifiable {}

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
    for (const key of Object.keys(data)) {
      if (key != 'id') data[key] = this.encryptSingle(data[key]);
    }

    return data;
  }

  static decrypt<T extends Encryptable>(data: T): T {
    for (const key of Object.keys(data)) {
      if (key != 'id') data[key] = this.decryptSingle(data[key]);
    }

    return data;
  }

  static encryptAll<T extends Encryptable>(data: T[]): T[] {
    for (let i = 0; i < data.length; i++) {
      data[i] = this.encrypt(data[i]);
    }

    return data;
  }

  static decryptAll<T extends Encryptable>(data: T[]): T[] {
    for (let i = 0; i < data.length; i++) {
      data[i] = this.decrypt(data[i]);
    }

    return data;
  }
}
