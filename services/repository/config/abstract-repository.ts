import { Repository } from "./";

export abstract class AbstractRepository<T> {
  private repository: Repository<T>;

  constructor(protected tableName: string, protected keyName: string) {
    this.repository = new Repository(tableName, keyName);
  }

  async getAll() {
    return await this.repository.getAll();
  }

  async getByKey(key: string, value: any) {
    return await this.repository.getByKey(key, value);
  }

  async save(entityArray: T[]) {
    await this.repository.save(entityArray);
  }

  async delete(keys: string[]) {
    await this.repository.delete(keys);
  }
}