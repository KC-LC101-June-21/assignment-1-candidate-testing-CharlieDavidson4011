const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = ""
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Input Candidate Name:"
let correctAnswer = ""
let candidateAnswer = ""
let questions = ["Who was the first American woman in space?", "True or false: 5 kilometers === 5000 meters?", "(5+3)/2*10=?", "Given the array [8, 'Orbit', 'Trajectory', 45] what entry is at index 2?", "What is the minimum crew size for the ISS?"]
let correctAnswers = ["Sally Ride", "True", "40", "Trajectory", "3"]
let candidateAnswers = []; // use this array to store candidate responses to questions.
let numQuestions = questions.length
let numCorrectAnswers = correctAnswers.length

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
input.question("Candidate Name:")

}

function askQuestion() {
 // candidateAnswers.push(input.question(questions))//this quite correct here....
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //


//yes questions[0] is defined; currently you are not putting the user response somewhere
//maybe something like....very close to that almost there....
candidateAnswers.push(input.question("1)" + questions[0]));
//input.question("1)" + questions[0]) //here it looks like you are asking the question, but now saving the answer somewhere
console.log("Your Answer:" + (candidateAnswers[0])) //this is what is giving you that function in your answer in the console
console.log("Correct Answer:" + correctAnswers[0])
console.log("")
candidateAnswers.push(input.question("2)" + questions[1]));//so you will have to do something similar to this area that we did on 30?
console.log("Your Answer:" + candidateAnswers[1])
console.log("Correct Answer:" + correctAnswers[1])
console.log("")
candidateAnswers.push(input.question("3)" + questions[2]));
console.log("Your Answer:" + candidateAnswers[2])
console.log("Correct Answer:" + correctAnswers[2])
console.log("")
candidateAnswers.push(input.question("3)" + questions[3]));
console.log("Your Answer:" + candidateAnswers[3])
console.log("Correct Answer:" + correctAnswers[3])
console.log("")
candidateAnswers.push(input.question("4)" + questions[4]));
console.log("Your Answer:" + candidateAnswers[4])
console.log("Correct Answer:" + correctAnswers[4])

}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 


  let grade = 20% 
   (candidateAnswers === correctAnswers) 
  console.log(grade)
   

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  askQuestion();
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