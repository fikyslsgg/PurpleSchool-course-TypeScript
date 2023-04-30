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
  b: string;
}

function difference(obj1: IA, obj2: IB): Omit<IA, keyof IB> {
  const result = { ...obj1 };
  for (const key in obj2) {
    if (key in result) {
      delete result[key];
    }
  }
  return result;
}