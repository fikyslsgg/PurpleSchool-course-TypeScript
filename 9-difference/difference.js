var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var a = { a: 5, b: '' };
var b = { a: 10, c: true };
function difference(obj1, obj2) {
    var result = __assign({}, obj1);
    for (var key in obj2) {
        if (key in result) {
            delete result[key];
        }
    }
    return result;
}
console.log(difference(a, b));
