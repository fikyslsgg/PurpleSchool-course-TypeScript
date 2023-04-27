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

type KeysOfType<T, U> = { [K in keyof T]: T[K] extends U ? K : never }[keyof T];

type ExcludeKeys<T, U> = Pick<T, Exclude<keyof T, KeysOfType<T, U>>>;

function difference<T extends object, U extends object>(obj1: T, obj2: U): ExcludeKeys<T, U> {
  const result = { ...obj1 } as ExcludeKeys<T, U>;
  for (const key in obj2) {
    if (key in result) {
      delete result[key as unknown as keyof typeof result];
    }
  }
  return result;
}

let v0: IDifference = difference(a, b);
console.log(v0);