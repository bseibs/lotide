const assertEqual = require('../assertEqual')
const tail = require('../tail')
// Test cases
const arr1 = [1, 2, 3, 4];
const arr2 = ["hello", "world", "foo", "bar"];

// Test cases for comparing individual elements and array length
assertEqual(tail(arr1)[0], 2);
assertEqual(tail(arr1).length, 3);
assertEqual(tail(arr2)[0], "world");
assertEqual(tail(arr2).length, 3);

// Test cases for arrays with one or zero elements
assertEqual(tail([1]).length, 0); // tail of array with one element only should be empty
assertEqual(tail([]).length, 0);