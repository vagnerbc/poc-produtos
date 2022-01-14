export interface Repository<T> {
  save(entityArray: T[]): Promise<void>;
  getAll(): Promise<T[]>;
  delete(keys: string[]): Promise<void>;
}
