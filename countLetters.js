const countLetters = function(sentence) {
  const result = {};
  for (let letter of sentence) {
    if (letter !== ' ') {
      result[letter] = (result[letter] || 0) + 1;
    }
  }
  return result;
};

module.exports = { countLetters};

