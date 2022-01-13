import { AxiosInstance } from "axios";

export abstract class AbstractService<T> {
  constructor(
    protected api: AxiosInstance,
    protected entity: string,
    protected endpoint: string
  ) {}

  async getAll() {
    return this.api.get(`${this.endpoint}`);
  }

  async save(entityArray: T[]) {
    return this.api.post(`${this.endpoint}`, { data: entityArray });
  }

  async update(entityArray: T[]) {
    return this.api.put(`${this.endpoint}`, {
      data: { [this.entity]: entityArray },
    });
  }

  async sync(entityArray: T[]) {
    return this.api.post(`${this.endpoint}/sync`, {
      data: { [this.entity]: entityArray },
    });
  }
}
