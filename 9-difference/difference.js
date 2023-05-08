"use strict";
let a = { a: 5, b: '' };
let b = { a: 10, c: true };
function difference(obj1, obj2) {
    return Object.keys(obj1).filter((key) => !(key in obj2)).reduce((acc, key) => (Object.assign(Object.assign({}, acc), { [key]: obj1[key] })), {});
}
