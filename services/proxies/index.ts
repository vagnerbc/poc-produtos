import productProxy from './product'

const proxies = new Map([
  ['products', productProxy]
])


export const getProxy = (name: string, endpoint: string) => proxies.get(name)(endpoint)
