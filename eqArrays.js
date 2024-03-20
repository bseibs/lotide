function eqArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false; // Return false if lengths are different
  }
  
  // Check the elements of each array
  for (let i = 0; i < arr1.length; i++) {
    // If not equal, return false
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  
  // If all elements are equal, return true
  return true;
}

module.exports = eqArrays;
