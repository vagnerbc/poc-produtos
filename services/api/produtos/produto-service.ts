import { AbstractService } from '../abstract-service';
import { api } from '../config';
import { TProduto, TProdutoSync } from './types';

export class ProdutoService extends AbstractService<TProduto> {
  constructor() {
    super(api, 'produtos', '/produtos');
  }

  async getSync(reference?: string) {
    const query = reference ? `?reference=${reference}` : '';
    return this.api.get(`/produtos-sync${query}`);
  }

  async sendSync(changed: TProdutoSync) {
    return this.api.post(`/produtos-sync`, {
      data: changed
    });
  }
}
