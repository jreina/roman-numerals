const converter = (function() {
  const _vals = [
    ["m", 1000],
    ["d", 500],
    ["c", 100],
    ["l", 50],
    ["x", 10],
    ["v", 5],
    ["i", 1]
  ];

  const _repeat = function(char, times) {
    return times
      ? Array(times)
          .fill(char)
          .reduce((memo, val) => memo + val)
      : "";
  };

  const _itoa = function(i) {
    let leftover = i;
    let a = "";
    for (let i = 0; i < _vals.length; i++) {
      let [char, val] = _vals[i];

      while (leftover >= val) {
        leftover -= val;
        a += char;
      }
    }

    return a;
  };

  const _convert = function(int) {
    return _itoa(int);
  };

  return {
    convert: _convert
  };
})();

module.exports = converter;
