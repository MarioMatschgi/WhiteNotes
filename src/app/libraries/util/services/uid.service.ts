import { Injectable } from '@angular/core';
import uniqid from 'uniqid';

/**
 * Service for generating unique ids
 */
@Injectable({
  providedIn: 'root',
})
export class UIDService {
  constructor() {}

  uid(ids?: string[]): string {
    let id: string;
    do {
      id = uniqid();
    } while (ids != null && ids.indexOf(id) !== -1);

    return id;
  }
}
