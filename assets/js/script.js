//declare the questions in array
const quizQuestions = [
    {
        title: "Which place is reserved for K2 in the ranking of the highest mountains on Earth? ",
        options: ["1", "2", "3","4"],
        correctOption: "2",
    },
    {   
        title: "Which place is reserved for Russia in the ranking of the largest countries on Earth by land area?",
        options: ["1", "2", "3", "4"],
        correctOption: "1",
    },
    {   
        title: "Which place is reserved for the US in the ranking of the largest countries on Earth by population?",
        options: ["1","2","3","4"],
        correctOption: "3",
    },
    {   
        title: "Which place is reserved for the Pacific Ocean in the ranking of the largest oceans on Earth?",
        options: ["1", "2", "3","4"],
        correctOption: "1",
    },
];

//declare count value in global 
let count = quizQuestions.length * 5;
//let count = 5;
let currentQuestionIndex = 0; 

const constructOptions = function (options) {
    const optionsContainer = document.createElement("div");
    optionsContainer.setAttribute("class", "options-container");
    for(let i = 0; i< options.length; i++) {
        //get the current option from array
    const option = options [i];
        //create my button
    const optionButton = document.createElement("button");
    optionButton.setAttribute("class", "options-item");
    optionButton.setAttribute("name", "option");
    optionButton.setAttribute("data-option", option);
    optionButton.textContent = option;
        // append to optionsContainer
    optionsContainer.appendChild(optionButton);
    };
    return optionsContainer;
};

const verifyAnswer = function (event) {
    console.log("verifyAnswer");
    const target = event.target; 
    const currentTarget = event.currentTarget;
    console.log(target, getAttribute("name")); 
    
    //check if click is from button only 
    if (target.getAttribute("name") === "option") { 
    // get the option user click on 
    const userOption = target.getAttribute("data-option");
    //get the correct option for the question
    const correctOption = currentTarget.getAttribute("data-correct"); 
    //verify the 2
    console.log(userOption, correctOption);

    if (userOption !== correctOption) {
        // time penalty deduct 5 seconds
        count -=5;
    }else {
        console.log("WRONG");
        }
        //go to next question 
    currentQuestionIndex +=1; 
    //check if last question 
    if (currentQuestionIndex < quizQuestions.length);  
        // render the next question 
    removeQuestionContainer(); 
    renderQuestionContainer(); 
    //check if last question 
    } else {
    console.log("render score form");
    }  
}; 

const constructQuestionContainer = function (question) {

    //construct container div
    const questionContainer = document.createElement("div");
    questionContainer.setAttribute("class", "container question-container");
    questionContainer.setAttribute("id", "question-container");
    questionContainer.setAttribute("data-correct", question.CorrectOption);

    //construct h2 element
    const questionH2 = document.createElement("h2");
    questionH2.setAttribute("class", "question");
    questionH2.textContent = question.title; 

    //construct options div
    constructOptions(question.options);
    const options = constructOptions (question.options);

    //append h2 and options div to container div 
    questionContainer.append(questionH2, options);
    
    // add event listener to listen for click events
    questionContainer.addEventListener("click", verifyAnswer);

    return questionContainer;
};
// 1render question container 
// 1declare a function 
const renderQuestionContainer = function() {
console.log("renderQuestionContainer");
//10get the current question 
const currentQuestion = quizQuestions [0];

//11construct the HTML for the question container
const questionContainer = constructQuestionContainer(currentQuestion); 
//12append the container to the document
document.getElementById("main-container").appendChild;
};
//7 declare a function 
const removeStartContainer = function() {
//8target start container 
const startContainer = document.getElementById("start-container");
console.log(startContainer);
//9remove from document 
startContainer.remove();

}; 
const removeQuestionContainer = function() {
    //8target start container 
    const QuestionContainer = document.getElementById("question-container");
    console.log(QuestionContainer);
    //9remove from document 
    QuestionContainer.remove();
    
    }; 

const startTimer = function () {
// declare the timer tick function 
const timerTick = function (timeTick) {
    console.log("tick");
    // check if the countdown has reached 0
    if(count >= 0 && currentQuestionIndex < quizQuestions.length) {
        //render the countdown time in the document
        document.getElementById("countdown").textContent = count; 
        count -= 1; 
    } else {
        //render game over container
    console.log("GAME OVER");
    clearInterval(timer);
    }
}; 
    //declare the timer
const timer = setInterval(timerTick, 1000); 

//declare the timer tick function 

}
//4declare a function to execute when start button is called 
const startQuiz = function () {
    
//5remove start container but have to define after
removeStartContainer();

//6render question container
renderQuestionContainer(); 

// start timer
startTimer();
}; 

//2target the start quiz button / method
const startButton = document.getElementById("start-quiz");
console.log(startButton); 

//3add a click event listener and start quiz  // error, as need to declare a function 
startButton.addEventListener("click", startQuiz); 