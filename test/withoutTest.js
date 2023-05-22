const { without } = require('../without');
const { assertArraysEqual } = require('../assertArraysEqual');

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without([], []), []);
assertArraysEqual(without([1, 2, 3], []), [1, 2, 3]);
assertArraysEqual(without(["hello", "world", "lighthouse"], ["lighthouse"]), ["hello", "world"]);
assertArraysEqual(without(["hello", "world", "lighthouse"], ["lighthouse", "hello"]), ["world"]);
assertArraysEqual(without(["hello", "world", "lighthouse"], ["goodbye"]), ["hello", "world", "lighthouse"]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);