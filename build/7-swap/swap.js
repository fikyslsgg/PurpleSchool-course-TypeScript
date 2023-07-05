"use strict";
function swapKeysAndValues(obj) {
    const swappedObj = {};
    for (const [key, value] of Object.entries(obj)) {
        swappedObj[value] = key;
    }
    return swappedObj;
}
const obj = { a: 1, b: 2, c: 3 };
const swappedObj = swapKeysAndValues(obj);
console.log(swappedObj);
