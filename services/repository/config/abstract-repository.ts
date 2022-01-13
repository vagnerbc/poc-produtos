import { Repository } from "./";

export abstract class AbstractRepository<T> {
  private repository: Repository<T>;

  constructor(protected tableName: string, protected keyName: string) {
    this.repository = new Repository(tableName, keyName);
  }

  getAll() {
    return this.repository.getAll();
  }

  save(entityArray: T[]) {
    this.repository.save(entityArray);
  }

  delete(keys: string[]) {
    this.repository.delete(keys);
  }
}
