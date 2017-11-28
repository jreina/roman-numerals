const mocha = require("mocha");
const assert = require("assert");
const converter = require("../hindu-arabic-to-roman.js");

describe("hindu-arabic-to-roman", function() {
  describe("convert", function() {
    it("should convert 1963 to mcmlxiii", function(done) {
      const expected = "mcmlxiii";
      const actual = converter.convert(1963);
      assert.equal(actual, expected);
      done();
    });
    it("should convert 400 to cd", function(done) {
      const expected = "cd";
      const actual = converter.convert(400);
      assert.equal(actual, expected);
      done();
    });
    it("should convert 56 to lvi", function(done) {
      const expected = "lvi";
      const actual = converter.convert(56);
      assert.equal(actual, expected);
      done();
    });
    it("should convert 1994 to mcmxciv", function(done) {
      const expected = "mcmxciv";
      const actual = converter.convert(1994);
      assert.equal(actual, expected);
      done();
    });
    it("should convert 14444 to mmmmmmmmmmmmmmcdxliv", function(done) {
      const expected = "mmmmmmmmmmmmmmcdxliv";
      const actual = converter.convert(14444);
      assert.equal(actual, expected);
      done();
    });
    it("should convert 44243 to mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmccxliii", function(
      done
    ) {
      const expected = "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmccxliii";
      const actual = converter.convert("44243");
      assert.equal(actual, expected);
      done();
    });
  });
});
