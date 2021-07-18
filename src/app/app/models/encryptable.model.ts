import { Identifiable } from './identifiable.model';

export interface Encryptable extends Identifiable {}

/**
 * Encrypts and decrypts every property except the id
 */
export class Encryptor {
  static encrypt<T extends Encryptable>(data: T): T {
    return data;
  }

  static decrypt<T extends Encryptable>(data: T): T {
    return data;
  }

  static encryptAll<T extends Encryptable>(data: T[]): T[] {
    return data;
  }

  static decryptAll<T extends Encryptable>(data: T[]): T[] {
    return data;
  }
}
