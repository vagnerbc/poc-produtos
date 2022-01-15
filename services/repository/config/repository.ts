export interface Repository<T> {
  save(entityArray: T[]): Promise<void>;
  getAll(): Promise<T[]>;
  getByFilter(filter?: TEntityFilter<T>): Promise<T[]>;
  delete(keys: string[]): Promise<void>;
}

export type TEntityFilter<T> = {
  [Property in keyof T]?: T[Property]
}
