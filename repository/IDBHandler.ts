export default interface IndexedDb {
  createObjectStore(tableNames: string[]);

  getValue(tableName: string, id: string);

  getAllValue(tableName: string);

  putValue(tableName: string, value: object);

  putBulkValue(tableName: string, values: object[]);

  deleteValue(tableName: string, id: string);
}
