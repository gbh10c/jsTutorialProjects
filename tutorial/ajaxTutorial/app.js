const url = './api/people.json';

// const response = fetch(url);
// console.log(response);

// fetch(url)
//   .then((resp) => {
//     // response object

//     // convert response into JSON data
//     // returns promise
//     return resp.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));

fetch(url)
  .then((resp) => resp.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
