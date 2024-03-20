function eqArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  
  return true;
}

function assertArraysEqual(arr1, arr2) {
  const isEqual = eqArrays(arr1, arr2);
  if (isEqual) {
    console.log(`Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
}

// Example usage:
assertArraysEqual([1, 2, 3], [1, 2, 3]); // Output: Assertion Passed: [1,2,3] === [1,2,3]
assertArraysEqual([1, 2, 3], [3, 2, 1]); // Output: Assertion Failed: [1,2,3] !== [3,2,1]
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // Output: Assertion Passed: [1,2,3] === [1,2,3]
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // Output: Assertion Failed: [1,2,3] !== [1,2,3]

module.exports = assertArraysEqual;
