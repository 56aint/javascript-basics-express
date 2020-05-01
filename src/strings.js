const sayHello = anyString => {
  // your code here
  return `Hello, ${anyString}!`;
};

const uppercase = string => {
  return `${string.toUpperCase()}`;
};

const lowercase = string => {
  // return string.toLowerCase();
  return `${string.toLowerCase()}`;
};

const countCharacters = string => {
  return string.length;
};

const firstCharacter = string => {
  // return string[0];
  return string.charAt(0);
};

const firstCharacters = (string, n) => {
  // return string.substring(0, n);
  return string.slice(0, n);
};

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters,
};
