import Dexie from "dexie";
import { TSyncStatus } from "services/api/produtos/types";
import { Repository, TEntityFilter } from "../repository";
import { DexieDB } from "./config";

type TEntity<T> = T & { indexed_id?: number, status?: TSyncStatus };

export class DexieRepository<T> implements Repository<T> {
  private dexie: Dexie = DexieDB.getInstance();
  private tableName: string;
  private keyName: string;

  constructor(tableName: string, keyName: string) {
    this.tableName = tableName;
    this.keyName = keyName;
  }

  async save(entityArray: T[]): Promise<void> {
    const connection = this.dexie[this.tableName];
    await this.dexie.transaction("rw", connection, async () => {
      const keys = entityArray.map((entity) => entity[this.keyName]);
      const entities: TEntity<T>[] = await connection
        .where(this.keyName)
        .anyOf(keys)
        .toArray();

      const idsMap = new Map(
        entities.map((entity) => [entity[this.keyName], entity.indexed_id])
      );
      const entitiesToSave = entityArray.map((entity) => ({
        ...entity,
        indexed_id: idsMap.get(entity[this.keyName]),
      }));
      connection.bulkPut(entitiesToSave);
    });
  }

  async getAll(): Promise<T[]> {
    const connection = this.dexie[this.tableName];
    return await connection.filter((entity: TEntity<T>) => !entity.status || entity.status !== 'deleted').toArray();
  }

  async getByFilter(filter?: TEntityFilter<T>): Promise<T[]> {
    const connection = this.dexie[this.tableName];
    if (!filter) {
      return await this.getAll();
    }
    return await connection.where(filter).toArray();
  }

  async delete(keys: string[]): Promise<void> {
    const connection = this.dexie[this.tableName];
    await this.dexie.transaction("rw", connection, async () => {
      connection.where(this.keyName).anyOf(keys).delete();
    });
  }
}
