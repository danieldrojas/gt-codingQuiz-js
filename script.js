//Define Variables
var h1El = document.getElementById("headline");
var pEl = document.getElementById("main-text");
var startBtn = document.createElement("button");
var timeEl = document.getElementById("timer");
var containerEl = document.getElementsByClassName("container");
var buttonsClass = document.getElementById("buttons");
var buttonOne = document.createElement("button");
var buttonTwo = document.createElement("button");
var buttonThree = document.createElement("button");
var buttonFour = document.createElement("button");
var indexArray = 0;
var questionsArray = [

    {
        question: "What is JavaScript?",
        answer1: "1. A programing language", 
        answer2: "2. A pseudocode",
        answer3: "3. An object",
        answer4: "4. None",
        correct: 1

    },
    {
        question: "Which of the following is not a JavaScript Data Type?",
        answer1: "Boolean",
        answer2: "String",
        answer3: "Function", 
        answer4: "Number",
        correct: 4
    },
    {
        question: "What of the options below represent a html element?",
        answer1: "   class  ",
        answer2: "   id   ",
        answer3: "   $  ",
        answer4: "   h1  ",
        correct: 4
    },
    {
        question: "What option is a boolean return ?",
        answer1: " not  ",
        answer2: "  yes ",
        answer3: "  correct  ",
        answer4: "  true ",
        correct:  4
    }
];

//Set content to variables 
h1El.textContent = "Coding Quiz Challenge";
pEl.textContent = "Try to answer the following code - related questions with the time limit.Keep in mind that incorrect answers will penalize your score time by ten seconds.";
startBtn.textContent = "Start Quiz";
timeEl.textContent = "Time";


// Timer
var secondsLeft = 60;
function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft;
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            // sendMessage("Time's up!");
        }
    }, 1000);
}


//Appended variables
buttonsClass.append(startBtn);

// function appendButtons

console.log(questionsArray[0].correct);
function rightAnswer() {
   buttonsClass.addEventListener("click", function () {
        for (i = 0; i < questionsArray.length; i++) {
            if (i === questionsArray[i].correct) { 
                console.log("correct Answer");
            } else {
                console.log("incorrect");
            }
        }
    })
};

//Functions

//Set content to the buttons 
function startQuiz() {
    setTime();
    rightAnswer();

    buttonsClass.append(buttonOne);
    buttonsClass.append(buttonTwo);
    buttonsClass.append(buttonThree);
    buttonsClass.append(buttonFour);


    h1El.textContent = questionsArray[indexArray].question;
    buttonOne.textContent = questionsArray[indexArray].answer1;
    buttonTwo.textContent = questionsArray[indexArray].answer2;
    buttonThree.textContent = questionsArray[indexArray].answer3;
    buttonFour.textContent = questionsArray[indexArray].answer4;
    
    
};



//clear page
function clearPreviousPage() {
    h1El.innerHTML = "";
    pEl.innerHTML = "";
    startBtn.style.display = "none";
};
//Event listeners 
startBtn.addEventListener("click", function () {
    indexArray;
    clearPreviousPage();
    startQuiz();

});
var buttonOneClicked = buttonOne.addEventListener("click", function () {
    indexArray++;   
    startQuiz();


});
var buttonTwoClicked = buttonTwo.addEventListener("click", function () {
    
    indexArray++;
    startQuiz();
});
var buttonThreeClicked = buttonThree.addEventListener("click", function () {
    indexArray++;
    startQuiz();
});
var buttonFourClicked = buttonFour.addEventListener("click", function () {
    indexArray++;
    startQuiz();
});








