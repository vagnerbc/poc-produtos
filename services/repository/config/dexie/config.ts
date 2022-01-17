import Dexie from 'dexie';

const version = 1;

const schema = {
  produtos: '++indexed_id, sku, name, status'
};

export class DexieDB {
  private static dexie: Dexie;

  static getInstance(): Dexie {
    if (!this.dexie) {
      this.dexie = new Dexie('offline_db');
      this.dexie.version(version).stores(schema);
    }
    return this.dexie;
  }
}
