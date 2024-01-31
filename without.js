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
//const array1 = [1, 2, 3];
//const array2 = [1, 2, 3];
//const array3 = [1, 2, 4];

//assertArraysEqual(array1, array2); // Output: Assertion Passed: Arrays are equal
//assertArraysEqual(array1, array3); // Output: Assertion Failed: Arrays are not equal

function without(source, itemsToRemove) {
  let result = []
  for (let i = 0; i < source.length; i++) {

    if (!itemsToRemove.includes(source[i])) {
      result.push(source[i]);
    }
  }
  return result
}
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"])