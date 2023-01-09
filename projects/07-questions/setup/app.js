// traversing the dom
// const questionBtns = document.querySelectorAll('.question-btn');

// questionBtns.forEach((btn) => {
//   btn.addEventListener('click', (e) => {
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle('show-text');
//   });
// });

//using selectors inside the element
const questions = document.querySelectorAll('.question');

questions.forEach((selection) => {
  const btn = selection.querySelector('.question-btn');
  btn.addEventListener('click', () => {
    questions.forEach((question) => {
      if (question !== selection) question.classList.remove('show-text');
    });

    selection.classList.toggle('show-text');
  });
});
