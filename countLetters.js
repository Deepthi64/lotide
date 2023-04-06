const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✔️✔️✔️ Assertion passed: ${actual} === ${expected}`);
  }
};

const countLetters = function(sentence) {
  const result = {};
  for (let letter of sentence) {
    if (letter !== ' ') {
      result[letter] = (result[letter] || 0) + 1;
    }
  }
  return result;
};

const result = countLetters('LHL');
assertEqual(result['L'], 2);
assertEqual(result['H'], 1);