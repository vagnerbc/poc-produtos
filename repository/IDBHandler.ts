export default interface IndexedDb {
  getValue(tableName: string, id: number);

  getAllValue(tableName: string);

  putValue(tableName: string, value: object);

  putBulkValue(tableName: string, values: object[]);

  deleteValue(tableName: string, id: number);
}
