import { AbstractService } from "../abstract-service";
import { api } from "../config";
import { TProduto } from "./types";

export class ProdutoService extends AbstractService<TProduto> {
  constructor() {
    super(api, "produtos", "/produtos");
  }

  async sync(reference?: string) {
    const query = reference ? `?reference=${reference}` : "";
    return this.api.get(`/produtos-sync${query}`);
  }
}
