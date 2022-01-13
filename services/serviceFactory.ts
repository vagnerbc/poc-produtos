import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
})

export function getService<T>(entity: string, endpoint: string) {
  return {
    delete(keys: string[]) {
      return api.delete(`${endpoint}`, { data: { keys } })
    },
    getAll() {
      return api.get(`${endpoint}`)
    },
    save(entityArray: T[]) {
      return api.post(`${endpoint}`, { data: entityArray })
    },
    update(entityArray: T[]) {
      return api.put(`${endpoint}`, { data: { [entity]: entityArray }})
    },
    sync(entityArray: T[]) {
      return api.post(`${endpoint}/sync`, { data: { [entity]: entityArray }})
    },
  };
}