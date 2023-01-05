const people = [
  { name: 'bob', age: 20, position: 'developer', id: 1 },
  { name: 'peter', age: 25, position: 'designer', id: 2 },
  { name: 'susy', age: 30, position: 'assistant boss', id: 3 },
  { name: 'anna', age: 35, position: 'boss', id: 4 },
];

// forEach
// does not return new array

// people.forEach((person) => console.log(person.position.toUpperCase()));

// map
// returns new array
// does not change size of original Array
// uses values from original array when making new one

// set to variable because it returns a new array
// const ages = people.map(function (person) {
//   return person.age + 20;
// });

// const newPeople = people.map((person) => {
//   return {
//     firstName: person.name.toUpperCase(),
//     oldAge: person.age + 20,
//   };
// });

// const names = people.map((person) => {
//   return `<h1>${person.name}</ h1>`;
// });

// document.body.innerHTML = names.join('');

// filter
// returns a new array
// CAN manipulate the size of new array
// returns based on condition

// const youngPeople = people.filter((person) => {
//   return person.age < 30;
// });

// const developers = people.filter((person) => {
//   return person.position === 'developer';
// });

// console.log(developers);

// find
// returns a single instance (an object, here)
// returns first match, if no match undefined
// great for getting unique value

const person = people.find((person) => {
  return person.id === 3;
});

console.log(person);
console.log(person.name);

// find returns a string in this instance
const names = ['bob', 'peter', 'susy', 'anna'];

const firstName = names.find((name) => {
  return name === 'anna';
});

console.log(firstName);
