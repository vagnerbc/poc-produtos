import Dexie, { Table } from 'dexie';
import { ProductCollection } from './proxies/product/collection';

export class DataBaseConnection extends Dexie {
  products: Table<ProductCollection>; 

  constructor() {
    super('offline_db');
    this.version(1).stores({
      products: '++indexed_id, sku, name'
    });
  }
}
