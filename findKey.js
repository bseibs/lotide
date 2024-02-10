const findKey = function (object, callback) {
  // Iterate through the keys of the object
  for (let key in object) {
    // Check if the callback returns a truthy value for the current value
    if (callback(object[key])) {
      // If callback returns truthy value, return the current key
      return key;
    }
  }
  // If no key is found, return undefined
  return undefined;
};
