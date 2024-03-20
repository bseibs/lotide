function eqArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  // Check each element of the arrays
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false; // If any elements are not equal, return false
    }
  }

  return true; // If all elements are equal, return true
}

console.log(`Assertion Passed: [arr1] === [arr2]`);
console.log(`Assertion Failed: [arr1] !== [arr2]`);

