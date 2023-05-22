const { assertEqual } = require('../assertEqual');
const { findKeyByValue } = require('../findKeyByValue');

const { bestTVShowsByGenre } = require('../findKeyByValue');

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);