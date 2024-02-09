assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
};
function eqArrays(arr1, arr2) {
  // compare arrays
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

// string, numbers, null, undefined, booleans (true or false)
// arrays
function eqObjects(obj1, obj2) {
  // Verify if 2 objects have the same string values (with the same key)

  // keys must be the same
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2)
  if (!eqArrays(obj1Keys, obj2Keys)) {
    return false;
  }



  for (let i = 0; i < obj1Keys.length; i++) {
    const objKey = obj1Keys[i]
    const obj1Value = obj1[objKey]

    const obj2Value = obj2[objKey]
    if (obj1Value !== obj2Value) {
      return false;
    }
  }
  return true;
}


//return false;
// value of those keys must be the same





const obj1 = {
  apples: "value",
  orange: 3,
  banana: true,
  pineapple: 7

};

const obj2 = {
  apples: "value",
  orange: 3,
  banana: true,
  pineapple: 6
};

console.log("Result>>", eqObjects(obj1, obj2));

//one value can be array while another is not. 
//possible neither are arrays
//possible both are arrays