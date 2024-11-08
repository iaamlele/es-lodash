import compact from "../../src/api/array/compact.js";

describe("compact", function() {
    const array = [0, 1, false, 2, '', 3];

    it("should create an array with all falsey values ​​removed", function() {
        const actual = compact(array);
        expect(actual).toStrictEqual([1, 2, 3]);
    })
});