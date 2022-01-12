export interface IProduto {
  sku: string;
  name: string;
  price: number;
}

export interface ISyncData {
  updated: IProduto[];
  deleted: string[];
}
