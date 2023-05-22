const assert = require('chai').assert;
const tail = require('../tail').tail;

describe('#tail', () => {
  it('returns ["Lighthouse", "Labs"] when called with ["Hello", "Lighthouse", "Labs"]', () => {
    const expected = ["Lighthouse", "Labs"];
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.deepEqual(result, expected);
  });
});