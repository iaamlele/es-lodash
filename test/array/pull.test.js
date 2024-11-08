import pull from "../../src/api/array/pull.js";
describe("pull", function() {
    const array = ['a', 'b', 'c', 'a', 'b', 'c'];
    it("should it delete characters 'a' and 'c' from the array?", function() {
        expect(pull(array, 'a', 'c')).toStrictEqual(['b', 'b']);
    });
})