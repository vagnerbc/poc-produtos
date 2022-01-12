import { IProduto, ISyncData } from "model/produto";

export default {
  async sincroniza(): Promise<ISyncData> {
    const res = await fetch("http://localhost:3000/api/sync", {
      method: "POST",
      // mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ reference: Date.now() }),
    });

    return await res.json();
  },

  async buscaTodos(): Promise<IProduto[]> {
    const res = await fetch("http://localhost:3000/api/produtos");

    const json = await res.json();

    return json.produtos;
  },
};
