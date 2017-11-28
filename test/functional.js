const mocha = require("mocha");
const assert = require("assert");
const toRoman = require("../hindu-arabic-to-roman.js");
const fromRoman = require("../roman-to-hindu-arabic.js");

describe("functional", function() {
  describe("fromRoman.convert(toRoman.convert(n))", function() {
    it("should convert back and forth from 1 to 10,000", function(done) {
      for (let i = 10000; i > 0; --i) {
        let actual = fromRoman.convert(toRoman.convert(i));
        let expected = i;
        assert.equal(actual, expected);
      }

      done();
    });
  });
});
