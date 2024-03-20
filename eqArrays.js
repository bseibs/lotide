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
module.exports = eqArrays;