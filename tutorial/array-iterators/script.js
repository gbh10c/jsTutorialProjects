const people = [
  { name: 'bob', age: 20, position: 'developer' },
  { name: 'peter', age: 25, position: 'designer' },
  { name: 'susy', age: 30, position: 'assistant boss' },
  { name: 'anna', age: 35, position: 'boss' },
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

const youngPeople = people.filter((person) => {
  return person.age < 30;
});

const developers = people.filter((person) => {
  return person.position === 'developer';
});

console.log(developers);
