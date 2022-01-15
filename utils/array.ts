export function removeAttributeByKey<T>(array: T[], key: keyof T): T[] {
  const newArray = [...array];
  return newArray.map(produto => ({ ...produto, [key]: undefined }));
}
