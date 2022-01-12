import { IProduto } from "model/produto";
import IDBHandler from "repository/IDBHandler";
import { IProdutoDBService } from "./IProdutoDBService";

class ProdutoDBService implements IProdutoDBService {
  private dbHandler: IDBHandler;

  readonly TABLE_NAME = "produtos";

  constructor(dbHandler: IDBHandler) {
    this.dbHandler = dbHandler;
  }

  async inicia() {
    await this.dbHandler.createObjectStore([this.TABLE_NAME]);
  }

  async cadastra(produtos: IProduto[]) {
    this.dbHandler.putBulkValue(this.TABLE_NAME, produtos);
  }

  async atualiza(produtos: IProduto[]) {
    produtos.map((produto) => {
      this.dbHandler.putValue(this.TABLE_NAME, produto);
    });
  }

  async remove(skus: string[]) {
    skus.map((sku) => {
      this.dbHandler.deleteValue(this.TABLE_NAME, sku);
    });
  }

  async alteraNome(sku: string, name: string) {}
}

export default ProdutoDBService;
