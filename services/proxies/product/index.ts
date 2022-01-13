import { productCollection } from "./collection";
import { getService } from 'services/serviceFactory';

export default function productProxy(endpoint: string) {  
  const service = getService('products', endpoint);
  const collection = productCollection;

  return {
    getAll: async () => {
      const products = await service.getAll();
      collection.save(products.data);
      return products;
    },
    save: async (product: any) => {
      await service.save([product]);
      collection.save([product]);
    },
    update: async (product: any) => {
      await service.update([product]);
      collection.save([product]);
    },
    delete: async (id: string) => {
      await service.delete([id]);
      collection.delete([id]);
    }
  }
}
