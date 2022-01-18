import { TProduto } from 'services/api/produtos/types'
import { AbstractRepository } from '../config/abstract-repository'
export class ProdutoRepository extends AbstractRepository<TProduto> {
  constructor() {
    super('produtos', 'sku')
  }
}
