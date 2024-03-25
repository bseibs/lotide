function findKeyByValue(obj, value) {
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (obj[key] === value) {
        return key;
      }
    }
  }
  return undefined;
}

// Testing the function
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

function assertEqual(actual, expected) {
  if (actual === expected) {
    console.log("Pass");
  } else {
    console.log(`Fail: Expected ${expected}, but got ${actual}`);
  }
}

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;
