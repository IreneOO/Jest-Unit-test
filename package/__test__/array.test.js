const { expect, describe, test } = require("@jest/globals");
const { toString } = require("../utils/array");

describe("array", () => {
  describe("toString", () => {
    test("pass array", () => {
      expect(toString([1, 2, 3])).toEqual("1,2,3");
    });
  });
});
