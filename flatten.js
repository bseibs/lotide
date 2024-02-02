//assertArraysEqual function
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
//eqArrays function
function eqArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  //check the element of each
  for (let i = 0; i < arr1.length; i++) {
    //if not equal return false
    if (arr1[i] !== arr2[i]) {
      return false;
    }
    //if elements are equal return true
    return true;
  }
}
//flatten function
function flatten(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {

  }

  for (let x = 0, x < arr2.length; x++)
}