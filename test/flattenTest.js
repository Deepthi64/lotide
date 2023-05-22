const { assertArraysEqual } = require('../assertArraysEqual');
const { flatten } = require('../flatten');

const input = [1, 2, [3, 4], 5, [6]];
const expectedOutput = [1, 2, 3, 4, 5, 6];
assertArraysEqual(flatten(input), expectedOutput);