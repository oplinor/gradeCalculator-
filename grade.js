
function calculateGrade() {
  const grades = document.querySelectorAll('.grade');
  let total = 0;
  let count = 0;

  grades.forEach(g => {
    const val = parseInt(g.value);
    if (!isNaN(val)) {
      total += val;
      count++;
    }
  });

  const resultBox = document.getElementById('result');

  if (count !== 5) {
    resultBox.style.display = 'block';
    resultBox.innerHTML = "Please enter all 5 grades!";
    return;
  }

  const average = Math.round(total / 5);
  let grade = '';
  let comment = '';

  if (average >= 90) {
    grade = 'A 🎉';
    comment = "Excellent! You're killing it!";
  } else if (average >= 80) {
    grade = 'B';
    comment = "Good job! Keep it up!";
  } else if (average >= 70) {
    grade = 'C ';
    comment = "Not bad, but study more!";
  } else if (average >= 60) {
    grade = 'D ';
    comment = "Be careful, time to review!";
  } else {
    grade = 'F ';
    comment = "You can do better. Don’t give up!";
  }

  // Hide all other elements
  document.getElementById('gradeInputs').style.display = 'none';
  document.getElementById('resultButton').style.display = 'none';
  document.getElementById('title').style.display = 'none';

  // Show result
  resultBox.style.display = 'block';
  resultBox.innerHTML = `
    <strong>Average:</strong> ${average}<br>
    <br>
    <strong>Grade:</strong> ${grade}<br>
    <br>
    <em>${comment}</em>
  `;
}
