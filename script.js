const {
  add,
  subtract,
  multiply,
  divide,
  power,
  createStudent,
  sortStudentsByScore,
  getClassSummary,
} = require('./operator.js');

const students = [
  createStudent({ name: 'Andi', grade: 'XI', age: 17, scores: [88, 90, 94, 86] }),
  createStudent({ name: 'Bunga', grade: 'XI', age: 16, scores: [92, 95, 90, 91] }),
  createStudent({ name: 'Candra', grade: 'XII', age: 18, scores: [80, 82, 85, 88] }),
  createStudent({ name: 'Dina', grade: 'XII', age: 17, scores: [78, 84, 86, 89] }),
];

const arithmetic = {
  sum: add(10, 5),
  diff: subtract(10, 5),
  product: multiply(10, 5),
  quotient: divide(50, 5),
  power: power(3, 4),
};

const rankedStudents = sortStudentsByScore(students);
const summary = getClassSummary(students);

console.log('=== Arithmetic Demo ===');
console.log(`Addition: ${arithmetic.sum}`);
console.log(`Subtraction: ${arithmetic.diff}`);
console.log(`Multiplication: ${arithmetic.product}`);
console.log(`Division: ${arithmetic.quotient}`);
console.log(`Exponent: ${arithmetic.power}`);

console.log('\n=== Student Ranking ===');
rankedStudents.forEach((student, index) => {
  console.log(`${index + 1}. ${student.name} - ${student.grade} - Average: ${student.averageScore.toFixed(2)}`);
});

console.log('\n=== Class Summary ===');
console.log(`Total students: ${summary.totalStudents}`);
console.log(`Highest average: ${summary.highestAverage.toFixed(2)}`);
console.log(`Lowest average: ${summary.lowestAverage.toFixed(2)}`);
console.log(`Class average: ${summary.classAverage.toFixed(2)}`);
console.log(`Top student: ${summary.topStudent.name}`);

console.log('\n=== Detailed Student Report ===');
students.forEach((student) => {
  console.log(`${student.name} (${student.grade}) - Scores: ${student.scores.join(', ')} - Average: ${student.averageScore.toFixed(2)}`);
});