import { IProduto } from "model/produto";

export interface IProdutoService {
  cadastraDB(produtos: IProduto[]);
  sincronizaDB();
}
