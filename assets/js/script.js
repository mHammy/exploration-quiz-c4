// Global variables
var currentIndex = 0;
var currentTime = 60;
var timeSpent = 0;
var timer;
var cAnswer = 0;
// var userScore; //Ask Tutor
var userArray = []; //Ask Tutor
// var existingData = localStorage.getItem('userScore'); //Ask Tutor
// userArray = existingData ? JSON.parse(existingData): []; //Ask Tutor


// Quiz questions and controls
var questionH2 = document.getElementById("question");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");
var button5 = document.getElementById("button5");

// Results and stats
var answerNotify = document.getElementById("answer-notify");
var totalPoints = document.getElementById("total-points");
var totalCorrect = document.getElementById("total-correct");
var totalQuestions = document.getElementById("total-questions");
var timeLeft = document.getElementById("time-left");

// Start, Question and Result containers
var bContainer = document.querySelector("#button-container");
var sContainer = document.querySelector("#start-container");
var rContainer = document.querySelector("#result-container");

//Submit score form
var button6 = document.getElementById("button6");
var initials = document.getElementById("initials");

//Timer
var pTimer = document.getElementById("timer");

// Event Listeners for user "click" that moves to next question
button5.addEventListener("click", startQuiz);

// This function changes display settings and begins the quiz functions.
function startQuiz() {
    sContainer.setAttribute("style", "display: none");
    bContainer.setAttribute("style", "display: flex");
    startTimer();
    displayQuestion();
}

// This function starts the countdown timer
function startTimer() {
    pTimer.textContent = currentTime;
    timer = setInterval(function () {
        timeSpent++;
        pTimer.textContent = currentTime - timeSpent;
        if (timeSpent >= currentTime) {
            currentIndex = questionArray.length;
            nextQuestion();
        }
    }, 1000);
}


// This function displays the questions and verifies which button is clicked for answer verification
function displayQuestion () {
    questionH2.textContent = questionArray[currentIndex].text;
    button1.textContent = questionArray[currentIndex].options[0];
    button2.textContent = questionArray[currentIndex].options[1];
    button3.textContent = questionArray[currentIndex].options[2];
    button4.textContent = questionArray[currentIndex].options[3];

    var option = bContainer.querySelectorAll(".quiz-buttons");
    for (var i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this.textContent)");
    } 
}
// Verifies the answer
function optionSelected(answer) {
    var correctAnswer = questionArray[currentIndex].answer;
    var userAnswer = answer;
    if (correctAnswer == userAnswer) {
        cAnswer++;
        displayCorrect();
        console.log("correct");
        nextQuestion();
    } else {
        timeSpent += 5;
        displayIncorrect();
        console.log("incorrect");
        nextQuestion();
    }
}


// This function moves the user to the next question
function nextQuestion() {
    currentIndex++;
    if (currentIndex <= questionArray.length - 1) {
        displayQuestion();
    } else {
        stopTimer();
        endQuiz();
    }
}

// This displays a "Correct!" message in the footer
function displayCorrect() {
    answerNotify.textContent = "That is correct!";
    answerNotify.classList.add("answer-correct");
    answerNotify.setAttribute("style", "opacity: 1");
    setTimeout(function () {
        answerNotify.setAttribute("style", "opacity: 0");
        answerNotify.classList.remove("answer-correct");
    }, 1000);
}

// This displays an "Incorrect!" message in the footer
function displayIncorrect() {
    answerNotify.textContent = "That is incorrect";
    answerNotify.classList.add("answer-incorrect");
    answerNotify.setAttribute("style", "opacity: 1");
    pTimer.setAttribute("style", "background: crimson");
    setTimeout(function () {
        answerNotify.setAttribute("style", "opacity: 0");
        answerNotify.classList.remove("answer-incorrect");
        pTimer.setAttribute("style", "background: #343a40");
    }, 1000);
}

// This function will stop the timer
function stopTimer() {
     clearInterval(timer);
}

// This function will bring up the ending results screen
function endQuiz() {
    bContainer.setAttribute("style", "display: none");
    questionH2.setAttribute("style", "display: none");
    rContainer.setAttribute("style", "display: initial");
    totalPoints.innerText = (cAnswer * 10) + (currentTime - timeSpent);
    totalCorrect.innerText = cAnswer;
    totalQuestions.innerText = questionArray.length;
    timeLeft.innerText = currentTime - timeSpent;
    return totalPoints;
}


//On submit button click, send to localStorage
button6.addEventListener("click", function(event) {
    event.preventDefault();

    if (initials.value.length < 2 || initials.value.length > 3) {
        alert("Entry must be 2-3 characters");
    } else {
        var userScore = {
            initials: initials.value,
            highscore: totalPoints.innerText
        };
        userArray.push(userScore); //ask tutor
        localStorage.setItem("userScore", JSON.stringify(userArray));
        location.href = "./highscores.html";
    }
});
