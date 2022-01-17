export function removeAttributeByKey<T>(array: T[], key: keyof T): T[] {
  const newArray = [...array];
  return newArray.map((object) => ({ ...object, [key]: undefined }));
}
