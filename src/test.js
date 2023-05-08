"use strict";
exports.__esModule = true;
var really_relaxed_json_1 = require("really-relaxed-json");
var rjson = '[ one two three {foo:bar} ]';
var json = (0, really_relaxed_json_1.toJson)(rjson);
console.log(json);
