// FOR EACH
// does not return new array

const people = [
  { name: 'bob', age: 20, position: 'developer' },
  { name: 'peter', age: 25, position: 'designer' },
  { name: 'susy', age: 30, position: 'boss' },
];

people.forEach((person) => console.log(person.position.toUpperCase()));
