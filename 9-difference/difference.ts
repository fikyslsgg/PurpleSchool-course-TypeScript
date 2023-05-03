interface IA {
  a: number;
  b: string;
}

interface IB {
  a: number;
  c: boolean;
}

let a: IA = { a: 5, b: '' };
let b: IB = { a: 10, c: true };

interface IDifference {
  [key: string]: any;
}

function difference(obj1: IDifference, obj2: IDifference): Omit<IDifference, keyof IDifference> {
  return Object.keys(obj1).filter((key) => !(key in obj2)).reduce((acc, key) => ({ ...acc, [key]: obj1[key] }), {});
}