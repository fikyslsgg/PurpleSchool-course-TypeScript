"use strict";
let a = { a: 5, b: '' };
let b = { a: 10, c: true };
function difference(obj1, obj2) {
    const result = Object.assign({}, obj1);
    for (const key in obj2) {
        if (key in result) {
            delete result[key];
        }
    }
    return result;
}
