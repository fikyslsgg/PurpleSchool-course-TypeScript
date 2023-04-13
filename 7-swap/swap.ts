function swapKeysAndValues<T extends string | number | symbol>(obj: Record<string, T>): Record<T, string> {
  const swappedObj: Record<T, string> = {} as Record<T, string>;
  for (const [key, value] of Object.entries(obj)) {
    swappedObj[value] = key;
  }
  return swappedObj;
}

const obj = { a: 1, b: 2, c: 3 };
const swappedObj = swapKeysAndValues(obj);
console.log(swappedObj);
