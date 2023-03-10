// add role: 'student' to each object
const updatedStudents = students.map((student) => {
  student.role = 'student';
  return student;
});
// console.log(updatedStudents);

// filter to return scores above 80
const highScores = students.filter((student) => student.score > 80);
// console.log(highScores);

// find specific id in array
const specificId = students.find((student) => student.id === 4);
// console.log(specificId);

// find average score
const averageScore =
  students.reduce((scoresTotal, student) => {
    return scoresTotal + student.score;
  }, 0) / students.length;
// console.log(averageScore);

// list favorite subjects with reduce
const survey = students.reduce((survey, student) => {
  const favorite = student.favoriteSubject;
  if (survey[favorite]) {
    survey[favorite]++;
  } else {
    survey[favorite] = 1;
  }
  return survey;
}, {});
// console.log(survey);

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const date = new Date();
const day = date.getDay();
const month = date.getMonth();
const number = date.getDate();
const year = date.getFullYear();

const sentence = `Today is ${days[day]}, ${months[month]} ${number}, ${year}.`;

document.body.innerHTML = `<h1>${sentence}</ h1>`;
