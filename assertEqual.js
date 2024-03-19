const assertEqual = function (expected, actual){

if (expected === actual){
console.log(`Assertion Passed: [actual] === [expected]`);
} else {
  console.log(`Assertion Failed: [actual] !== [expected]`);
  }
}
module.exports = assertEqual;