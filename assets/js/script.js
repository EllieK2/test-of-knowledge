console.log('index');

// 1render question container 
// 1declare a function 
const renderQuestionContainer = function() {
console.log("renderQuestionContainer");
//10get the current question 

//11construct the HTML for the question container

//12append the container to the document 
};
//7 declare a function 
const removeStartContainer = function() {
console.log("removeStartContainer");
//8target start container 
const startContainer = document.getElementById("start-container");
//9remove from document 
}; 
//4declare a function to execute when start button is called 
const startQuiz = function () {
    console.log("start quiz");
//5remove start container but have to define after
removeStartContainer();

//6render question container
renderQuestionContainer(); 

}; 

//2target the start quiz button / method
const startButton = document.getElementById("start-quiz");
console.log(startButton); 

//3add a click event listener and start quiz  // error, as need to declare a function 
startButton.addEventListener("click", startQuiz); 