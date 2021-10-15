//declare the questions in array
const quizQuestions = [
    {
        title: "Which place is reserved for K2 in the ranking of the highest mountains on Earth? ",
        options: ["1", "2", "3","4"],
        currentAnswer: "2",
    },
    {   
        title: "Which place is reserved for Russia in the ranking of the largest countries on Earth by land area?",
        options: ["1", "2", "3", "4"],
        currentAnswer: "1",
    },
    {   
        title: "Which place is reserved for the US in the ranking of the largest countries on Earth by population?",
        options: ["1","2","3","4"],
        currentAnswer: "3",
    },
    {   
        title: "Which place is reserved for the Pacific Ocean in the ranking of the largest oceans on Earth?",
        options: ["1", "2", "3","4"],
        currentAnswer: "1",
    },
];

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
//8target start container 
const startContainer = document.getElementById("start-container");
console.log(startContainer);
//9remove from document 
startContainer.remove();

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