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

