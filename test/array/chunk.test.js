import chunk from "../../src/api/array/chunk.js";
import lodashStable from "lodash";
const falsey = [, null, undefined, false, 0, NaN, ""];
const stubArray = function () {
  return [];
};

describe("chunk", function() {
    const array = [1, 2, 3, 4, 5, 6];

    it("should return chunked arrays", function() {
        const actual = chunk(array, 3);
        expect(actual).toStrictEqual([
            [1, 2, 3],
            [4, 5, 6]
        ])
    });

    it("should return the last chunk as remaining elements", function () {
        const actual = chunk(array, 4);
        expect(actual).toStrictEqual([
          [1, 2, 3, 4],
          [5, 6],
        ]);
    });

    it("should treat falsey `size` values, except `undefined`, as `0`", function() {
      // undefined，期望返回 [[1], [2], [3], [4], [5], [6]]，表示没有 size 时，将 array 分成一个个独立的单元
      // falsey的值就返回[]
      // Array.prototype.map():
      // 语法:map(callbackFn) / map(callbackFn, thisArg)
      // 参数: 为数组中的每个元素执行的函数。它的返回值作为一个元素被添加为新数组中。该函数被调用时将传入以下参数：element(数组当前正在处理的元素); index(正在处理的元素在数组中的索引);array(调用了map的数组本身)

        const expected = lodashStable.map(falsey, function (value) {
          return value === undefined ? [[1], [2], [3], [4], [5], [6]] : [];
        });
        // 所以这里index就是数组当前正在处理的元素. 三元组含义: index === 0时,执行chunk(array),此时默认number为1,在fasey数组中,索引为0是empty(空元素),在访问 falsey[0] 时会得到 undefined，但是它和直接赋值 undefined 不完全相同
        const actual = lodashStable.map(falsey, function (size, index) {
          return index ? chunk(array, size) : chunk(array);
        });
        expect(actual).toStrictEqual(expected);
    });

    it("should ensure the minimum `size` is `0`", function () {
      const values = lodashStable
        .reject(falsey, lodashStable.isUndefined)
        .concat(-1, -Infinity);
      const expected = lodashStable.map(values, stubArray);
  
      const actual = lodashStable.map(values, function (n) {
        return chunk(array, n);
      });
  
      expect(actual).toStrictEqual(expected);
    });
  
    it("should coerce `size` to an integer", function () {
      expect(chunk(array, array.length / 4)).toStrictEqual([
        [1],
        [2],
        [3],
        [4],
        [5],
        [6]
      ]);
    });
});