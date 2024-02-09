const eqArrays = function (arr1, arr2) {
  //check if arrays are the same length
  if (arr1.length !== arr2.length) return false;
  //loop through the array 
  for (let i = 0; i < arr1.length; i++) {
    //checks if arrays element values are the same
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const eqObjects = function (object1, object2) {

  //define objects keys 
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  //check if keys are the same in objects
  if (keys1.length !== keys2.length) return false;

  for (const key of keys1) {
    if (!object2.hasOwnProperty(key)) return false;
    //define value of objects keys
    const val1 = object1[key];
    const val2 = object2[key];


    if (Array.isArray(val1) && Array.isArray(val2)) {
      //check if array values are the same
      if (!eqArrays(val1, val2)) return false;
    } else if (val1 !== val2) {
      return false;
    }
  }

  return true;
};

const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// Test cases
const obj1 = { a: '1', b: 2 };
const obj2 = { b: 2, a: '1' };
const obj3 = { a: '1', b: 2, c: [1, 2, 3] };

assertObjectsEqual(obj1, obj2); // Should pass
assertObjectsEqual(obj1, obj3); // Should fail
