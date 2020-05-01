const getNthElement = (index, array) => {
  // your code here
  return array[index % array.length];
};

const arrayToCSVString = array => {
  // your code here
  return array.toString();
};

const csvStringToArray = string => {
  // your code here
  return string.split(',');
};

const addToArray = (element, array) => {
  // your code here
  array.push(element);
};

const addToArray2 = (element, array) => {
  // your code here
  return array.concat(element);
};

const removeNthElement = (index, array) => {
  // your code here
  return array.splice(index, 1);
};

const numbersToStrings = numbers => {
  // your code here
  return numbers.toString().split(',');
};

const uppercaseWordsInArray = strings => {
  // your code here
  return strings.map(up => up.toUpperCase());
};

const reverseWordsInArray = strings => {
  // your code here
  return strings.map(rev =>
    rev
      .split('')
      .reverse()
      .join(''),
  );
};

const onlyEven = numbers => {
  // your code here
  return numbers.filter(num => num % 2 === 0);
};

const removeNthElement2 = (index, array) => {
  // your code here
  const newArray = [...array];
  newArray.splice(index, 1);
  return newArray;
};

const elementsStartingWithAVowel = strings => {
  // your code here
  return strings.filter(word => /^[aeiou]/i.test(word));
  // /^[aeiou]/i means:
  // ^ matches the start of the string.
  // [aeiou] matches any of the characters inside the square brackets, a single time.
  // i is a case-insensitive modifier.
};

const removeSpaces = string => {
  // your code here
  return string.replace(/\s/g, '');
  /*
  return string.split(" ").join(""); */
};

const sumNumbers = numbers => {
  // your code here
  return numbers.reduce((a, b) => a + b, 0);
};

const sortByLastLetter = strings => {
  // your code here
  const reversed = reverseWordsInArray(strings);
  reversed.sort();
  return reverseWordsInArray(reversed);
  /*
  return strings.sort(
    (a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1)
  ); */
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter,
};
