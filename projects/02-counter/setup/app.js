const number = document.getElementById('value');
const button = document.querySelector('.button-container');

let counter = 0;

button.addEventListener('click', (e) => {
  if (e.target.classList.contains('increase')) counter++;
  if (e.target.classList.contains('decrease')) counter--;
  if (e.target.classList.contains('reset')) counter = 0;
  number.textContent = counter;
});
