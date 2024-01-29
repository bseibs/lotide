const assertEqual = function (expected, actual) {
  if (expected === actual)
      console.log(`Assertion Passed: [actual] === [expected]`);
    else console.log(`Assertion Failed: [actual] !== [expected]`);

};
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
