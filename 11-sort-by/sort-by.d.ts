declare module 'sort-by' {
  function sort(property: string, map: Function): Function;
  function fn<T>(a: T, b: T): number;
  function sortBy<T>(...args: T[]): Function;
}