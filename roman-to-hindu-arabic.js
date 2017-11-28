const converter = (function() {
  const _vals = {
    i: 1,
    v: 5,
    x: 10,
    l: 50,
    c: 100,
    d: 500,
    m: 1000
  };

  const _tokenize = function(numerals) {
    let chars = numerals.split("");
    let chunk = "";
    let chunks = [];
    let lastByte = "";
    for (let i = 0; i < chars.length; i++) {
      if (lastByte && lastByte.length && _vals[lastByte] >= _vals[chars[i]]) {
        chunks.push(chunk);
        chunk = "";
      }
      chunk += chars[i];
      lastByte = chars[i];
    }
    chunks.push(chunk);
    return chunks;
  };

  const _parse = function(chunks) {
    let ints = chunks
      .map(chunk => chunk.split(""))
      .map(chunk => chunk.map(byte => _vals[byte]))
      .map(ints => ints.reduceRight((memo, val) => memo - val))
      .reduce((memo, val) => memo + val);
    return ints;
  };

  const _convert = function(romanNumerals) {
    return _parse(_tokenize(romanNumerals));
  };

  return {
    convert: _convert
  };
})();

module.exports = converter;
