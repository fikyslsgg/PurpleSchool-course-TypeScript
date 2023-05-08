"use strict";
function pickObjectKeys(obj, keys) {
    const result = {};
    keys.forEach(key => {
        if (obj.hasOwnProperty(key)) {
            result[key] = obj[key];
        }
    });
    return result;
}
