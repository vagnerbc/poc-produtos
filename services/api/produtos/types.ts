export type TSyncStatus = 'updated' | 'deleted';

export type TProduto = {
  sku: string;
  name: string;
  status?: TSyncStatus;
};

export type TProdutoSync = {
  updated: TProduto[];
  deleted: string[];
};
