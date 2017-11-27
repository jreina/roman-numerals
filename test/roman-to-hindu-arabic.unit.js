const mocha = require("mocha");
const assert = require("assert");
const converter = require("../roman-to-hindu-arabic.js");

describe("roman-to-hindu-arabic", function() {
  describe("convert", function() {
    it("should convert mcmlxiii to 1963", function(done) {
      const expected = 1963;
      const actual = converter.convert("mcmlxiii");
      assert.equal(actual, expected);
      done();
    });
    it("should convert cd to 400", function(done) {
      const expected = 400;
      const actual = converter.convert("cd");
      assert.equal(actual, expected);
      done();
    });
    it("should convert lvi to 56", function(done) {
      const expected = 56;
      const actual = converter.convert("lvi");
      assert.equal(actual, expected);
      done();
    });
    it("should convert mcmxciv to 1994", function(done) {
      const expected = 1994;
      const actual = converter.convert("mcmxciv");
      assert.equal(actual, expected);
      done();
    });
    it("should convert mmmmmmmmmmmmmmcdxliv to 14444", function(done) {
      const expected = 14444;
      const actual = converter.convert("mmmmmmmmmmmmmmcdxliv");
      assert.equal(actual, expected);
      done();
    });
    it("should convert mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmccxliii to 44243", function(
      done
    ) {
      const expected = 44243;
      const actual = converter.convert(
        "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmccxliii"
      );
      assert.equal(actual, expected);
      done();
    });
  });
});
