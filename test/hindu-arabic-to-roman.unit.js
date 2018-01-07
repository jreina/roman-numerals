const { expect } = (chai = require("chai"));
const converter = require("../hindu-arabic-to-roman.js");

describe("hindu-arabic-to-roman", function() {
  describe("convert", function() {
    it("should convert 1963 to mcmlxiii", function() {
      const expected = "mcmlxiii";
      const actual = converter.convert(1963);
      expect(expected).to.be.equal(actual);
    });
    it("should convert 400 to cd", function() {
      const expected = "cd";
      const actual = converter.convert(400);
      expect(expected).to.be.equal(actual);
    });
    it("should convert 56 to lvi", function() {
      const expected = "lvi";
      const actual = converter.convert(56);
      expect(expected).to.be.equal(actual);
    });
    it("should convert 1994 to mcmxciv", function() {
      const expected = "mcmxciv";
      const actual = converter.convert(1994);
      expect(expected).to.be.equal(actual);
    });
    it("should convert 14444 to mmmmmmmmmmmmmmcdxliv", function() {
      const expected = "mmmmmmmmmmmmmmcdxliv";
      const actual = converter.convert(14444);
      expect(expected).to.be.equal(actual);
    });
    it("should convert 44243 to mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmccxliii", function() {
      const expected = "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmccxliii";
      const actual = converter.convert("44243");
      expect(expected).to.be.equal(actual);
    });
  });
});
