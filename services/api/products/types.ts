export type TProduct = {
  sku: string;
  name: string;
};

export type TProductSync = {
  updated: TProduct[];
  deleted: string[];
};