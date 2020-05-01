//import { truthiness } from './booleans';
// import { numbersToStrings } from './array';
// import { multiply } from './numbers';
const express = require('express');

const app = express();
app.use(express.json());

const { sayHello } = require('./strings');
const { uppercase } = require('./strings');
const { lowercase } = require('./strings');
const { firstCharacter } = require('./strings');
const { firstCharacters } = require('./strings');
const { countCharacters } = require('./strings');

const { add } = require('./numbers');
const { subtract } = require('./numbers');
const { multiply } = require('./numbers');
const { divide } = require('./numbers');
const { remainder } = require('./numbers');

const { truthiness } = require('./booleans');
const { negate } = require('./booleans');
const { isOdd } = require('./booleans');
const { startsWith } = require('./booleans');

const { getNthElement } = require('./array');
const { arrayToCSVString } = require('./array');
const { addToArray2 } = require('./array');
const { elementsStartingWithAVowel } = require('./array');
const { removeNthElement } = require('./array');
const { removeNthElement2 } = require('./array');

app.get('/strings/hello/world', (req, res) => {
  res.status(200).json({ result: 'Hello, world!' });
});

app.get('/strings/hello/:myString', (req, res) => {
  res.json({ result: sayHello(req.params.myString) });
});

app.get('/strings/upper/:anyString', (req, res) => {
  res.json({ result: uppercase(req.params.anyString) });
});

app.get('/strings/lower/:anotherString', (req, res) => {
  res.json({ result: lowercase(req.params.anotherString) });
});

app.get('/strings/first-character/:someString', (req, res) => {
  // console.log(firstCharacter(req.params.someString));
  res.status(200).json({ result: firstCharacter(req.params.someString) });
});

app.get('/strings/first-characters/:anotherString', (req, res) => {
  const length = req.query.length || 1;
  // console.log(firstCharacters(req.params.anotherString, length));

  res.json({ result: firstCharacters(req.params.anotherString, length) });
});

app.get('/strings/count-characters/:aString', (req, res) => {
  res.status(200).json({ result: countCharacters(req.params.aString) });
});

app.get('/numbers/add:a/and/:b', (req, res) => {
  const a = parseInt(req.params.a, 10);
  const b = parseInt(req.params.b, 10);

  // console.log(add(a, b));

  return Number.isNaN(a) || Number.isNaN(b)
    ? res.status(400).json({ error: 'Parameters must be valid numbers.' })
    : res.status(200).json({ result: add(a, b) });
});

app.get('/numbers/subtract:c/from/:d', (req, res) => {
  const c = parseInt(req.params.c, 10);
  const d = parseInt(req.params.d, 10);

  // console.log(subtract(c, d));

  return Number.isNaN(c) || Number.isNaN(d)
    ? res.status(400).json({ error: 'Parameters must be valid numbers.' })
    : res.status(200).json({ result: subtract(d, c) });
});

app.post('/numbers/multiply', (req, res) => {
  const { a } = req.body;
  const { b } = req.body;

  // console.log(multiply(a, b));
  // multiplies stringified numbers

  if (Number('a') === a && Number('b') === b) {
    return res.status(200).json({ result: multiply(a, b) });
  }

  // errors if a parameter is missing

  /* if (a === undefined || b === undefined) {
    return res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } */

  if (!a || !b) {
    // (a === null || b === null)
    return res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  }

  // errors if the parameters are not numbers

  // if (Number.isNaN(a) || Number.isNaN(b)) {
  // return res.status(400).json({ error: 'Parameters must be valid numbers.' });
  // }
  if (Number.isNaN(parseInt(a, 10)) && Number.isNaN(parseInt(b, 10))) {
    return res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }

  return res.status(200).json({ result: multiply(a, b) });
});

app.post('/numbers/divide', (req, res) => {
  const { a } = req.body;
  const { b } = req.body;

  if (Number('a') === a && Number('b') === b) {
    return res.status(200).json({ result: divide() });
  }

  if (b === 0) {
    return res.status(400).json({ error: 'Unable to divide by 0.' });
  }
  if (a === undefined || b === undefined) {
    return res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  }

  if (Number.isNaN(parseInt(a, 10)) && Number.isNaN(parseInt(b, 10))) {
    return res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }

  res.status(200).json({ result: divide(a, b) });
});

app.post('/numbers/remainder', (req, res) => {
  const a = parseInt(req.body.a, 10); // no destr
  const b = parseInt(req.body.b, 10);
  console.log(remainder(a, b));
  if (a === 0) {
    res.status(200).json({ result: 0 });
  }
  if (b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  }
  if (!req.body.a || !req.body.b) {
    // a is not the same as req.body.a
    res.status(400).send({ error: 'Parameters "a" and "b" are required.' });
  }
  if (!a || !b) {
    // same as  if (Number.isNaN(!a) || Number.isNaN(!b))
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
  res.status(200).send({ result: remainder(a, b) });
});

app.post('/booleans/negate', (req, res) => {
  // console.log(negate(req.body.value));
  res.status(200).send({ result: negate(req.body.value) });
});

app.post('/booleans/truthiness', (req, res) => {
  // const { a } = req.body;
  res.status(200).send({ result: truthiness(req.body.value) });
});

app.get('/booleans/is-odd/:num', (req, res) => {
  const num = parseInt(req.params.num, 10);
  return !num // if not a number
    ? res.status(400).send({ error: 'Parameter must be a number.' })
    : res.status(200).json({ result: isOdd(num) });
});

app.get('/booleans/:string/starts-with/:character', (req, res) => {
  const { string } = req.params;
  const { character } = req.params;
  return character.length > 1
    ? res.status(400).send({ error: 'Parameter "character" must be a single character.' })
    : res.status(200).json({ result: startsWith(character, string) });
});

app.post('/arrays/element-at-index/:index', (req, res) => {
  const { index } = req.params;
  const { array } = req.body;
  res.status(200).json({ result: getNthElement(index, array) });
});

app.post('/arrays/to-string', (req, res) => {
  const { array } = req.body;
  res.status(200).json({ result: arrayToCSVString(array) });
});

app.post('/arrays/append', (req, res) => {
  const { array } = req.body;
  const { value } = req.body;
  console.log(addToArray2(value, array));
  res.status(200).send({ result: addToArray2(value, array) });
});

app.post('/arrays/starts-with-vowel', (req, res) => {
  const { array } = req.body;
  // console.log(elementsStartingWithAVowel(array));
  res.status(200).send({ result: elementsStartingWithAVowel(array) });
});

app.post('/arrays/remove-element', (req, res) => {
  let { index } = req.query || 0;
  const { array } = req.body;
  console.log(removeNthElement2(index, array));
  res.status(200);
  res.json({ result: removeNthElement2(index, array) });
});

module.exports = app;
