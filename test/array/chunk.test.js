import chunk from "../../src/api/array/chunk.js";
import lodashStable from "lodash";
const falsey = [, null, undefined, false, 0, NaN, ""];

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
        const expected = lodashStable.map(falsey, function (value) {
          return value === undefined ? [[0], [1], [2], [3], [4], [5]] : [];
        });
        const actual = lodashStable.map(falsey, function (size, index) {
          return index ? chunk(array, size) : chunk(array);
        });
        expect(actual).toStrictEqual(expected);
    });
});