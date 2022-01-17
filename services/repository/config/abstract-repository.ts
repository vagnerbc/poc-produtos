import { Repository } from './';
import { TEntityFilter } from './repository';

export abstract class AbstractRepository<T> {
  private repository: Repository<T>;

  constructor(protected tableName: string, protected keyName: string) {
    this.repository = new Repository(tableName, keyName);
  }

  async getAll() {
    return await this.repository.getAll();
  }

  async getByFilter(filter?: TEntityFilter<T>): Promise<T[]> {
    return await this.repository.getByFilter(filter);
  }

  async save(entityArray: T[]) {
    await this.repository.save(entityArray);
  }

  async delete(keys: string[]) {
    await this.repository.delete(keys);
  }
}
