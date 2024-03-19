const assertEqual = function (expected, actual) {
  if (expected === actual) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
}

const tail = function (arr) {
  let tailArr = [];
  for (let i = 1; i < arr.length; i++) {
    tailArr.push(arr[i]);
  }
  return tailArr;
};

// Test cases
const arr1 = [1, 2, 3, 4];
const arr2 = ["hello", "world", "foo", "bar"];

assertEqual([2, 3, 4].toString(), tail(arr1).toString());
assertEqual(["world", "foo", "bar"].toString(), tail(arr2).toString());


//return array.slice[0]

// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

module.exports = tail;