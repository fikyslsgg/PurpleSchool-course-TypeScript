function pickObjectKeys<T extends object, K extends keyof T>(obj: T, keys: K[]): any {
  const result: Partial<Pick<T, K>> = {};
  keys.forEach(key => {
    if (obj.hasOwnProperty(key)) {
      result[key] = obj[key];
    }
  });

  return result;
}