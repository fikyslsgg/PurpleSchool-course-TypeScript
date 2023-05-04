function pickObjectKeys<T extends object, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  const result: any = {};
  keys.forEach(key => {

    if (obj.hasOwnProperty(key)) {
      result[key] = obj[key];
    }
  });

  return result;
}