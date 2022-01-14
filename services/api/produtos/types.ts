export type TProduto = {
  sku: string;
  name: string;
};

export type TProdutoSync = {
  updated: TProduto[];
  deleted: string[];
};
