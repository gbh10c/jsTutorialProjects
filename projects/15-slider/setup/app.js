const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');

slides.forEach((slide, idx) => {
  slide.style.left = `${idx * 100}%`;
});

let counter = 0;

prevBtn.addEventListener('click', () => {
  counter--;
  carousel();
});
nextBtn.addEventListener('click', () => {
  counter++;
  carousel();
});

function carousel() {
  //working with continuous slides
  // if (counter === slides.length) {
  //   counter = 0;
  // } else if (counter < 0) {
  //   counter = slides.length - 1;
  // }

  //working with beginning and end of list show/hide buttons
  if (counter < slides.length - 1) {
    nextBtn.style.display = 'block';
  } else {
    nextBtn.style.display = 'none';
  }

  if (counter > 0) {
    prevBtn.style.display = 'block';
  } else {
    prevBtn.style.display = 'none';
  }

  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}

prevBtn.style.display = 'none';
