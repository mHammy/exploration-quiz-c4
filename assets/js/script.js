// IF incorrect, take time off the countdown
var currentIndex = 0;
var currentTime = 60;
var timer;

// This is the questions that will display for the user
var questionArray = [
    {
        text: "1. Which of the following is correct about features of JavaScript?", 
        options: [
            "A. JavaScript is is complementary to and integrated with HTML.",
            "B. JavaScript is open and cross-platform.",
            "C. Both of the above.",
            "D. All of the above.",
        ]
    }, 
    {
        text: "2. How can you get the total number of arguments passed to a function?", 
        options: [
            "A. Using args.length property.",
            "B. Using arguments.length property.",
            "C. Both of the above.",
            "D. None of the above.",
        ]
    },
    {
        text: "3. Which of the following type of variable is visible only within a function where it is defined?", 
        options: [
            "A. global variable",
            "B. local variable",
            "C. Both of the above.",
            "D. None of the above.",
        ]
    },
    {
        text: "4. Which of the following function of Number object forces a number to display in exponential notation?", 
        options: [
            "A. toExponential()",
            "B. toFixed()",
            "C. toPrecision()",
            "D. toLocaleString()",
        ] 
    },
    {
        text: "5. Which of the following function of Boolean object returns a string of either 'true' or 'false' depending upon the value of the object?", 
        options: [
            "A. toSource()",
            "B. valueOf()",
            "C. toString()",
            "D. None of the above.",
        ]   
    }];

// This function displays the questions and choices based on the currentIndex count
function displayQuestion() {
var questionH2 = document.getElementById("question");

questionH2.textContent = questionArray[currentIndex].text;

var button1 = document.getElementById("button1");
button1.textContent = questionArray[currentIndex].options[0];

var button2 = document.getElementById("button2");
button2.textContent = questionArray[currentIndex].options[1];

var button3 = document.getElementById("button3");
button3.textContent = questionArray[currentIndex].options[2];

var button4 = document.getElementById("button4");
button4.textContent = questionArray[currentIndex].options[3];
}

displayQuestion();
// This function moves the user to the next question
function nextQuestion() {
    currentIndex++;
    displayQuestion();
}
// Event Listeners for user "click" that moves to next question
button1.addEventListener("click", nextQuestion);
button2.addEventListener("click", nextQuestion);
button3.addEventListener("click", nextQuestion);
button4.addEventListener("click", nextQuestion);

// This is the countdown function that will run and stop the user's time left
function countDown() {
    var pTimer = document.getElementById("timer");
    currentTime--;
    pTimer.textContent = currentTime;
    if (currentTime <= 0) {
        clearInterval(timer);
    }
}
// This is the function that STARTS the timer when the user clicks start
function startTimer() {
    timer = setInterval(countDown, 1000)
}

startTimer();