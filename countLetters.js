//function countLetters
const countLetters = function (sentence) {
  const result = {}

  //loop through the object 
  for (let char of sentence) {
    //loop through the sentence to determine space or character
    if (char !== " ") { //character = a
      if (result[char]) { //checks if letter initialized or not
        result[char] += 1 //{a : 2}
      } else {
        result[char] = 1 //{a : 1}
      }
    }
  }
  return result;
}
console.log(countLetters("apple is good"))