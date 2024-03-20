const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const middle = function (array) {
  const length = array.length;
  if (length <= 2) {
    return [];
  } else if (length % 2 === 1) {
    const middleIndex = Math.floor(length / 2);
    return [array[middleIndex]];
  } else {
    const middleIndex = length / 2;
    return [array[middleIndex - 1], array[middleIndex]];
  }
};
module.exports = {
  middle,
 assertArraysEqual
};