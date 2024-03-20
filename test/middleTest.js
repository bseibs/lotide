const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 2, 3], [1, 2, 3]); 
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(middle([1, 2, 3]), [2]); 
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);