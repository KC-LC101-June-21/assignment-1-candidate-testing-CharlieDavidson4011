const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = ""
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Input Candidate Name:"
let correctAnswer = ""
let candidateAnswer = ""
let questions = ["1) Who was the first American woman in space? ", "2) True or false: 5 kilometers === 5000 meters. ", "3) (5+3)/2*10= ? ", "4) Given the array [8, 'Orbit', 'Trajectory', 45] what entry is at index 2? ", "5) What is the minimum crew size for the ISS? "]
let correctAnswers = ["Sally Ride", "True", "40", "Trajectory", "3"]
let candidateAnswers = []; 


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
input.question("Candidate Name:")

}

function askQuestion() {
 // candidateAnswers.push(input.question(questions))//this quite correct here....
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

for (let i = 0; i < questions.length; i ++){
	candidateAnswers.push(input.question(questions[i])); 
   console.log(`Your Answer: ${candidateAnswers[i]}
Correct Answer: ${correctAnswers[i]}`)
  
}
//console.log(">>> Overall Grade 


}

function gradeQuiz(candidateAnswers) {
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
let correctCandidateAnswers = 0; 

for (let i = 0; i < candidateAnswers.length; i++) {

  if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
  correctCandidateAnswers++; 
  }
}

let grade;
  console.log((correctCandidateAnswers/questions.length)*100 + "%" );

grade = (correctCandidateAnswers/questions.length)*100;
// 

if (grade < 80) {
console.log(">>> Status: FAILED <<<")
}
if (grade >= 80 ) {
  console.log(">>> Status: PASSED <<<")
}




} 

function runProgram() {
  name = "Candidate Name:  "
  // candidateAnswer[i] currently refers to a value of candidateAnswer not a number
 



// join the zoom through slack

// ` essentially replaces " 
// `${} references a variable`
//The variable in this case would be candidateAnswer, correct?



  
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  
  

  
  askQuestion();
//   for (let i = 0; i < questions.length; i++)
// console.log(questions[i])
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};