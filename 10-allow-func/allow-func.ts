class User {
  @allowFunc((a: number) => a > 0)
  age: number = 30;
}

function allowFunc(min: (a: number) => boolean) {
  return (
    target: Object,
    propertyKey: string | symbol
  ) => {
    let value = target;
    const setter = function (newValue: number) {
      if (min(newValue)) {
        value = newValue;
      } else {
        console.log('Error');
      }
    }

    const getter = function () {
      return value;
    }
    Object.defineProperty(target, propertyKey, {
      set: setter,
      get: getter
    });
  }
}

const person = new User();
person.age = 0;
console.log(person.age);