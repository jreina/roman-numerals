const { expect } = (chai = require("chai"));
const converter = require("../index.js").toArabic;

describe("roman-to-hindu-arabic", function() {
  describe("convert", function() {
    it("should convert mcmlxiii to 1963", function() {
      const expected = 1963;
      const actual = converter.convert("mcmlxiii");
      expect(actual).to.be.equal(expected);
    });
    it("should convert cd to 400", function() {
      const expected = 400;
      const actual = converter.convert("cd");
      expect(actual).to.be.equal(expected);
    });
    it("should convert lvi to 56", function() {
      const expected = 56;
      const actual = converter.convert("lvi");
      expect(actual).to.be.equal(expected);
    });
    it("should convert mcmxciv to 1994", function() {
      const expected = 1994;
      const actual = converter.convert("mcmxciv");
      expect(actual).to.be.equal(expected);
    });
    it("should convert mmmmmmmmmmmmmmcdxliv to 14444", function() {
      const expected = 14444;
      const actual = converter.convert("mmmmmmmmmmmmmmcdxliv");
      expect(actual).to.be.equal(expected);
    });
    it("should convert mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmccxliii to 44243", function() {
      const expected = 44243;
      const actual = converter.convert(
        "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmccxliii"
      );
      expect(actual).to.be.equal(expected);
    });
  });
});
