
const interns = [
  { name: "Precious", scores: [85, 90, 78, 92, 88] },
  { name: "Emeka", scores: [75, 80, 70, 68, 72] },
  { name: "Chioma", scores: [90, 95, 92, 88, 94] },
  { name: "Tunde", scores: [65, 70, 60, 72, 68] },
  { name: "Amaka", scores: [88, 84, 90, 86, 92] }
];

// Function to calculate the average score
function calculateAverage(scores) {
  let total = 0;
  scores.forEach(score => total += score);
  return total / scores.length;
}


interns.forEach(intern => {
  const average = calculateAverage(intern.scores);
  console.log(`${intern.name}'s average score is ${average.toFixed(2)}`);
});
