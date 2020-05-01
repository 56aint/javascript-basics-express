const negate = a => {
  // your code here
  return !a;
};

const both = (a, b) => {
  // your code here
  // if (a && b) {
  // return true;
  // }
  // return false;
  // return a && b ? true : false;
  return a && b;
};

const either = (a, b) => {
  // your code here
  // if (a || b) {
  // return true;
  // }
  // return false;
  // return a || b ? true : false;
  return a || b;
};

const none = (a, b) => {
  // your code here
  return !a && !b;
};

const one = (a, b) => {
  // your code here
  // return (!a && b) || (!b && a);
  return (!a && b) || (a && !b);
};

const truthiness = a => {
  // your code here
  return !!a;
};

const isEqual = (a, b) => {
  // your code here
  return a === b;
};

const isGreaterThan = (a, b) => {
  // your code here
  return a > b;
};

const isLessThanOrEqualTo = (a, b) => {
  // your code here
  return a <= b;
};

const isOdd = a => {
  // your code here
  return !(a % 2 === 0);
};

const isEven = a => {
  // your code here
  return a % 2 === 0;
};

const isSquare = a => {
  // your code here
  return Math.sqrt(a) % 1 === 0;
};

const startsWith = (char, string) => {
  // your code here
  return string.startsWith(char);
};

const containsVowels = string => {
  // your code here
  return (
    string.includes('a') ||
    string.includes('e') ||
    string.includes('i') ||
    string.includes('O') ||
    string.includes('u')
  );
};

const isLowerCase = string => {
  // your code here
  return string === string.toLowerCase();
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase,
};
