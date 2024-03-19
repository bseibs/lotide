const assertEqual = require('../assertEqual')
const tail = require('../tail')
let tailArr = []
const tail = function (arr) {
  for (const item of arr) {
    if (item !== arr[0]) {
      tailArr.push(item);
    }
  }
  return tailArr;
};