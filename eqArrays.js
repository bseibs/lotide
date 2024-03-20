const assertEqual = function (expected, actual) {
  if (expected === actual) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
}

function eqArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    assertEqual(false, true); // Fail the test if lengths are different
    return false;
  }
  
  // Check the elements of each array
  for (let i = 0; i < arr1.length; i++) {
    // If not equal, fail the test
    if (arr1[i] !== arr2[i]) {
      assertEqual(false, true); // Fail the test if elements are different
      return false;
    }
  }
  
  // If all elements are equal, pass the test
  assertEqual(true, true);
  return true;
}

// Test cases
eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false
eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false

module.exports = eqArrays;