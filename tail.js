const assertEqual = function (expected, actual) {
  if (expected === actual){
    console.log(`Assertion Passed: [actual] === [expected]`);
    } else {
      console.log(`Assertion Failed: [actual] !== [expected]`);
      }
    }
let tailArr = []
const tail = function (arr) {
  for (const item of arr) {
    if (item !== arr[0]) {
      tailArr.push(item);
    }
  }
  return tailArr;
};


//return array.slice[0]

// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

module.exports = tail;