import { DataBaseConnection } from "./dbConfig";

export type Collection = {
  tableName: string;
  keyName: string;
}

export type DbEntity<T> = T & { indexed_id?: number }
export class DbCollection<T> {
  private dbConnection: DataBaseConnection;
  private tableName: string;
  private keyName: string;

  constructor(options: Collection) {
    this.dbConnection = new DataBaseConnection();
    this.tableName = options.tableName;
    this.keyName = options.keyName;
  }

  delete(keys: string[]) {
    const connection = this.dbConnection[this.tableName];
    connection.where(this.keyName).anyOf(keys).delete()
  }

  getAll() {
    const connection = this.dbConnection[this.tableName];
    return connection.toArray()
  }

  async save(entityArray: T[]) {
    const connection = this.dbConnection[this.tableName];
    const keys = entityArray.map(entity => entity[this.keyName]);
    const entities: DbEntity<T>[] = await connection.where(this.keyName).anyOf(keys).toArray();

    const idsMap = new Map(entities.map(entity => [entity[this.keyName], entity.indexed_id]));
    const entitiesToSave = entityArray.map(entity => ({
      ...entity,
      indexed_id: idsMap.get(entity[this.keyName]),
    }));
    connection.bulkPut(entitiesToSave);
  }
}
