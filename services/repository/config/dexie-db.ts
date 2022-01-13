import Dexie, { Table, TableSchema } from "dexie";

import { Database } from "./database";

type SaveEntity<T> = T & { indexed_id?: number };

export class DexieDB<T> implements Database<T> {
  private dexie: Dexie;
  private tableName: string;
  private keyName: string;

  constructor(tableName: string, keyName: string) {
    this.tableName = tableName;
    this.keyName = keyName;
  }

  initialize(version: number, schema: { [tableName: string]: string }): void {
    this.dexie.version(version).stores(schema);
  }

  async save(entityArray: T[]): Promise<void> {
    const connection = this.dexie[this.tableName];
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
  }

  getAll(): T[] {
    const connection = this.dexie[this.tableName];
    return connection.toArray();
  }

  delete(keys: string[]): void {
    const connection = this.dexie[this.tableName];
    connection.where(this.keyName).anyOf(keys).delete();
  }
}
