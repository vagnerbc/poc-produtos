import { ProdutoService } from "services/api/produtos/produto-service";
import { TProduto } from "services/api/produtos/types";
import { ProdutoRepository } from "services/repository/produtos/produto-repository";

export class ProdutoUseCase {
  private produtoService: ProdutoService;
  private produtoRepository: ProdutoRepository;

  constructor(
    produtoService: ProdutoService,
    produtoRepository: ProdutoRepository
  ) {
    this.produtoService = produtoService;
    this.produtoRepository = produtoRepository;
  }

  async getAll() {
    const produtos = await this.produtoService.getAll();
    await this.produtoRepository.save(produtos.data);
    return produtos.data;
  }

  async save(produto: any) {
    await this.produtoService.save([produto]);
  }

  async update(produto: any) {
    await this.produtoService.update([produto]);
    this.produtoRepository.save([produto]);
  }

  async delete(id: string) {
    await this.produtoService.delete([id]);
    await this.produtoRepository.delete([id]);
  }

  async sync(): Promise<TProduto[]> {
    const reference = localStorage.getItem("produtoReference");
    const { data } = await this.produtoService.sync(reference);

    await this.produtoRepository.save(data.updated);
    await this.produtoRepository.delete(data.deleted);

    const produtos = await this.produtoRepository.getAll();

    localStorage.setItem("produtoReference", data.last_sync);

    return produtos;
  }
}
