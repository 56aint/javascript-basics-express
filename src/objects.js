const createPerson = (name, age) => {
  // your code here
  // return personObj = {name,age};
  return {
    name,
    age,
  };
};

const getName = object => {
  // your code here
  // Object.name - silly me
  return object.name;
};

const getProperty = (property, object) => {
  // your code here
  // Object.age - silly me
  return object.age;
};

const hasProperty = (property, object) => {
  // your code here
  // return object.hasOwnProperty(property);
  // Ersels explanation on Object.prototype.hasOwnProperty.call(aPerson, "age");
  return Object.prototype.hasOwnProperty.call(object, property);
};

const isOver65 = person => {
  // your code here
  // if (person.age > 65) {
  // return true;
  // }else{
  // return false;
  // }
  return person.age > 65;
};

const getAges = people => {
  // your code here
  return people.map(person => person.age);
};

const findByName = (name, people) => {
  // your code here
  // return Object.values(people[name]); - didnt work
  // people.forEach(element => {return element.name;});
  return people.find(obj => obj.name === name);
};

const findHondas = cars => {
  // your code here
  return cars.filter(brand => brand.manufacturer === 'Honda');
};
const averageAge = people => {
  // your code here
  return people.reduce((prev, user) => prev + user.age, 0) / people.length;
};
const createTalkingPerson = (name, age) => {
  // your code here
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson,
};
