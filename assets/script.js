console.log('Your external JavaScript file is linked 🎉');

// declare time value 
let counter = 60; 

//target all elements 
const counterSpan = document.querySelector("#counter")
const counterDiv = document.querySelector('#counter-div');
const mainElement = document.querySelector('#main');

const timerTick = function () {
    if (counter < 0) {
      console.log('BOOM');
      // kill the timer
      clearInterval(timer);
      renderImage();
    } else {
      counterSpan.textContent = counter;
      counter -= 1;
    }
  };
  
  const timer = setInterval(timerTick, 1000);
  
