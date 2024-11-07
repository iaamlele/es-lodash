import _ from "../src/index.js";

var arr = ['a', 'b', 'c', 'a', 'b', 'c'];
_.pull(arr, 'a', 'c');


var arr2 = ['a', 'b', 'c', 'd'];
_.chunk(arr2, 3);
_.chunk(arr2, 2);

var arr3 = [0, 1, false, 2, '', 3, null, "", undefined, NaN];
_.compact(arr3);

_.drop([1, 2, 3]);
_.drop([1, 2, 3], 2);
_.drop([1, 2, 3], 5);
_.drop([1, 2, 3], 0);