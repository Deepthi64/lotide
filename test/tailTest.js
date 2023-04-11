
//const tail = require('../tail');
//const assertArraysEqual = require('../assertArraysEqual');
const { tail, assertArraysEqual } = require('../tail');

const expected = ["Lighthouse", "Labs"];
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertArraysEqual(result, expected);