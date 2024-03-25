const letterPositions = function (sentence) {
  const results = {};
  for (let index = 0; index < sentence.length; index++) {
    if (sentence[index] !== " ") {
      if (results[sentence[index]]) {
        results[sentence[index]].push(index);
      } else {
        results[sentence[index]] = [index];
      }
    }
  }
  return results;
};

console.log(letterPositions("hello")); // Output: { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] }


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

//test case
console.log(letterPositions("loo"))

module.exports = letterPositions;