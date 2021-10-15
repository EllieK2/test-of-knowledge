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

const constructOptions = function (options) {
    for(let i = 0; i< options.length; i++) {

    }
};

const constructQuestionContainer = function (question) {
    console.log(question); 

    //construct container div
    const questionContainer = document.createElement("div");
    questionContainer.setAttribute("class", "container question-container");
    
    //construct h2 element
    const questionH2 = document.createElement("h2");
    questionH2.setAttribute("class", "question");
    questionH2.textContent = question.title; 

    //construct options div
    constructOptions(question.options);
    const options = constructOptions (question.options);

    //append h2 and options div to container div 
    questionContainer.append(questionH2, options);

};
// 1render question container 
// 1declare a function 
const renderQuestionContainer = function() {
console.log("renderQuestionContainer");
//10get the current question 
const currentQuestion = quizQuestions [0];

//11construct the HTML for the question container
constructQuestionContainer(currentQuestion); 
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