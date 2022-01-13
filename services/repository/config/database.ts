export interface Database<T> {
  save(entityArray: T[]): void;
  getAll(): T[];
  delete(keys: string[]): void;
}
