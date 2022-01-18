import { ProdutoUseCase } from 'services/use-cases/produtos/produto'
import { ProdutoService } from 'services/api/produtos/produto-service'
import { ProdutoRepository } from 'services/repository/produtos/produto-repository'

export const produtoUseCase = new ProdutoUseCase(
  new ProdutoService(),
  new ProdutoRepository()
)
