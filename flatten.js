function flatten(arr) {
  let flattenedArray = [];

  arr.forEach(element => {
    if (Array.isArray(element)) {
      flattenedArray.push(...flatten(element));
    } else {
      flattenedArray.push(element);
    }
  });

  return flattenedArray;
}

console.log(flatten([1, 2, [3, 4], 5, [6]])); // Output: [1, 2, 3, 4, 5, 6]