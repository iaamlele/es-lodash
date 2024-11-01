import _ from "../src/index.js";

var arr = ['a', 'b', 'c', 'a', 'b', 'c'];
_.pull(arr, 'a', 'c');
console.log(arr);