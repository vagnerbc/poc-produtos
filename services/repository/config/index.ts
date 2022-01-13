export { DexieDB as Repository } from "./dexie-db";
import Dexie, { Table, TableSchema } from "dexie";

export class DataBase {
  initialize(version: number, schema: { [tableName: string]: string }): void {
    const dexie = new Dexie("offline_db");
    dexie.version(version).stores(schema);
  }
}
