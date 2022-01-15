export type TSyncStatus = 'updated' | 'deleted';

export type TProduto = {
  sku: string;
  name: string;
  status?: TSyncStatus;
  indexed_id?: string;
};

export type TProdutoSync = {
  updated: TProduto[];
  deleted: string[];
};
