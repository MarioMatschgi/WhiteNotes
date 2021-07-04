import { Injectable } from '@angular/core';

/**
 * Service for Loading
 */
@Injectable({
  providedIn: 'root',
})
export class LoadService {
  /**
   * Dictionary of loads
   */
  private m_loads: { [loader: string]: number } = {};

  /**
   * Returns loads for loader
   * @param id Id of loader
   * @returns Returns amount of loads
   */
  loads(id: string): number {
    return this.m_loads[id] ? this.m_loads[id] : 0;
  }

  /**
   * Whether the loader is loading
   * @param id Id of loader
   * @returns Whether the loader is loading
   */
  isLoading(id: string = 'main'): boolean {
    return this.loads(id) > 0;
  }

  /**
   * Whether the loader is finished loading
   * @param id Id of loader
   * @returns Whether the loader is finished loading
   */
  finished(id: string = 'main'): boolean {
    return !this.isLoading(id);
  }

  constructor() {}

  /**
   * Adds a load by id
   * @param id Id of loader
   */
  load(id: string = 'main'): void {
    if (!Object.keys(this.m_loads).includes(id)) this.m_loads[id] = 1;
    else this.m_loads[id]++;
  }

  /**
   * Removes a load by id
   * @param id Id of loader
   */
  unload(id: string = 'main'): void {
    if (!this.m_loads[id] || this.m_loads[id] == 1) delete this.m_loads[id];
    else this.m_loads[id]--;
  }
}
