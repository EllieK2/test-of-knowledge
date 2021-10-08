// step 1 - set up the first variable by using const // 
const startButton = document.getElementById('start-btn')
// step 2 - console test // 
console.log ('start-btn')

//step 13 - question element
const questionElement = document.getElementById('question')
//step 14 - answer element
const answerButtonsElement= document.getElementById('answer buttons')

// step 8 - change the order of the questions // 
// & step 16 - changed a variable from const to let //
let shuffleQuestions, currentQuestionIndex 

// step 3 - beginning of the game // 
startButton.addEventListener('click', startGame)

// step 4 - create a function to start the game // 
function startGame () {
    startButton.classList.add('hide')
    // step 9 - added function to shuffle the questions, used Math floor for random selection 
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    //step 10 - set up the index to start from question 1 
    currentQuestionIndex = 0 
    setNextQuestion()
}
// step 5 - create a function to roll a next question //
function setNextQuestion () {
    // step 22 - reset function // 
    resteState()
    //step 11 - create a question appearing not in order//
    showQuestion(shuffledQuestions[currentQuestionIndex])
}
//step 12 set up function to show the question // 
function showQuestion(question) {
    //step 15 - set up of question element //
    questionElement.innerText = question.question 
    // step 17 - populating answers //
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        //step 18 set inner text and a class
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        // step 19 - set up event // 
        button.addEventListener('click', selectAnswer)
        //step 21 - added event //
        answerButtonsElement.appendChild(button)
    })
}

