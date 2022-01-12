import { IProdutoDBService } from "./IProdutoDBService";
import { IProdutoService } from "./IProdutoService";
import api from "api/produtos";
import { IProduto } from "model/produto";

class ProdutoService implements IProdutoService {
  produtoDBService: IProdutoDBService;

  constructor(produtoDBService: IProdutoDBService) {
    this.produtoDBService = produtoDBService;
  }

  async sincronizaDB() {
    const data = await api.sincroniza();

    await this.produtoDBService.inicia();
    await this.produtoDBService.atualiza(data.updated);
    await this.produtoDBService.remove(data.deleted);
  }

  async cadastraDB(produtos: IProduto[]) {
    await this.produtoDBService.inicia();
    await this.produtoDBService.cadastra(produtos);
  }
}

export default ProdutoService;
