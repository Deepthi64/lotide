const { assertEqual} = require('../assertEqual');
const {countLetters} = require('../countLetters');

const result = countLetters('LHL');
assertEqual(result['L'], 2);
assertEqual(result['H'], 1);