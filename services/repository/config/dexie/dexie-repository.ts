import Dexie from "dexie";
import { Repository } from "../repository";
import { DexieDB } from "./config";

type SaveEntity<T> = T & { indexed_id?: number };

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
      const entities: SaveEntity<T>[] = await connection
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
    return await connection.toArray();
  }

  async getByKey(key: string, value: any): Promise<T[]> {
    const connection = this.dexie[this.tableName];
    return await connection.where(key).equals(value).toArray();
  }

  async delete(keys: string[]): Promise<void> {
    const connection = this.dexie[this.tableName];
    await this.dexie.transaction("rw", connection, async () => {
      connection.where(this.keyName).anyOf(keys).delete();
    });
  }
}