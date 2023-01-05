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

console.log(averageScore);
