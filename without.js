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
  if (eqArrays(arr1, arr2)) {
    console.log(`Assertion Passed: Arrays are equal`);
  } else {
    console.log(`Assertion Failed: Arrays are not equal`);
  }
}

// Example usage
const array1 = [1, 2, 3];
const array2 = [1, 2, 3];
const array3 = [1, 2, 4];

assertArraysEqual(array1, array2); // Output: Assertion Passed: Arrays are equal
assertArraysEqual(array1, array3); // Output: Assertion Failed: Arrays are not equal
