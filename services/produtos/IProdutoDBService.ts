import { IProduto } from "model/produto";

export interface IProdutoDBService {
  inicia();

  cadastra(produtos: IProduto[]);

  atualiza(produtos: IProduto[]);

  alteraNome(sku: string, name: string);

  remove(skus: string[]);
}
