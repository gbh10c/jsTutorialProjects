const number = document.getElementById('value');
const decreaseBtn = document.querySelector('.decrease');
const resetBtn = document.querySelector('.reset');
const increaseBtn = document.querySelector('.increase');

let counter = 0;

decreaseBtn.addEventListener('click', () => {
  counter--;
  number.textContent = counter;
});
resetBtn.addEventListener('click', () => {
  counter = 0;
  number.textContent = counter;
});
increaseBtn.addEventListener('click', () => {
  counter++;
  number.textContent = counter;
});
