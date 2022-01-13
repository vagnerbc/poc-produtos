export interface Repository<T> {
  save(entityArray: T[]): void;
  getAll(): T[];
  delete(keys: string[]): void;
}
