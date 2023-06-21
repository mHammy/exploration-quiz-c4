var currentIndex = 0;
var currentTime = 60;
var timer;
var points = 0;

var questionH2 = document.getElementById("question");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");
var button5 = document.getElementById("button5");

var totalPoints = document.getElementById("total-points");
var totalCorrect = document.getElementById("total-correct");
var totalQuestions = document.getElementById("total-questions");

var qContainer = document.querySelector("#button-container");
var sContainer = document.querySelector("#start-container");

// This is the questions that will display for the user
// var questionArray = [
//     {
//         numb: 1,
//         text: "1. Which of the following is correct about features of JavaScript?",
//         answer: "C. Both of the above.",
//         options: [
//             "A. JavaScript is is complementary to and integrated with HTML.",
//             "B. JavaScript is open and cross-platform.",
//             "C. Both of the above.",
//             "D. All of the above.",
//         ]
//     },    
//     {
//         numb: 2,
//         text: "2. How can you get the total number of arguments passed to a function?",
//         answer: "B. Using arguments.length property.",
//         options: [
//             "A. Using args.length property.",
//             "B. Using arguments.length property.",
//             "C. Both of the above.",
//             "D. None of the above.",
//         ]
//     },
//     {
//         numb: 3,
//         text: "3. Which of the following type of variable is visible only within a function where it is defined?",
//         answer: "B. local variable",
//         options: [
//             "A. global variable",
//             "B. local variable",
//             "C. Both of the above.",
//             "D. None of the above.",
//         ]
//     },
//     {
//         numb: 4,
//         text: "4. Which of the following function of Number object forces a number to display in exponential notation?",
//         answer: "A. toExponential()",
//         options: [
//             "A. toExponential()",
//             "B. toFixed()",
//             "C. toPrecision()",
//             "D. toLocaleString()",
//         ]
//     },
//     {
//         numb: 5,
//         text: "5. Which of the following function of Boolean object returns a string of either 'true' or 'false' depending upon the value of the object?",
//         answer: "C. toString()",
//         options: [
//             "A. toSource()",
//             "B. valueOf()",
//             "C. toString()",
//             "D. None of the above.",
//         ]
//     },
//     {
//         numb: 6,
//         text: "6. Which of the following function of String object returns a number indicating whether a reference string comes before or after or is the same as the given string in sort order",
//         answer: "A. localeCompare()",
//         options: [
//             "A. localeCompare()",
//             "B. search()",
//             "C. substr()",
//             "D. concat()",
//         ]
//     },
//     {
//         numb: 7,
//         text: "7. Which of the following function of String object returns the calling string value converted to upper case?",
//         answer: "B. toUpperCase()",
//         options: [
//             "A. toLocaleUpperCase()",
//             "B. toUpperCase()",
//             "C. toString()",
//             "D. substring()",
//         ]
//     },
//     {
//         numb: 8,
//         text: "8. Which of the following function of String object causes a string to be displayed in the specified size as if it were in a <font size = 'size'> tag?",
//         answer: "C. fontsize()",
//         options: [
//             "A. fixed()",
//             "B. fontcolor()",
//             "C. fontsize()",
//             "D. bold()",
//         ]
//     },
//     {
//         numb: 9,
//         text: "9. Which of the following function of Array object calls a function for each element in the array?",
//         answer: "D. forEach()",
//         options: [
//             "A. concat()",
//             "B. every()",
//             "C. filter()",
//             "D. forEach()",
//         ]
//     },
//     {
//         numb: 10,
//         text: "10. Which of the following function of Array object extracts a section of an array and returns a new array?",
//         answer: "C. slice()",
//         options: [
//             "A. reverse()",
//             "B. shift()",
//             "C. slice()",
//             "D. some()",
//         ]
//     }];

// This function displays the questions and choices based on the currentIndex count
// function displayQuestion() {
//     var questionH2 = document.getElementById("question");

//     questionH2.textContent = questionArray[currentIndex].text;

//     var button1 = document.getElementById("button1");
//     button1.textContent = questionArray[currentIndex].options[0];

//     var button2 = document.getElementById("button2");
//     button2.textContent = questionArray[currentIndex].options[1];

//     var button3 = document.getElementById("button3");
//     button3.textContent = questionArray[currentIndex].options[2];

//     var button4 = document.getElementById("button4");
//     button4.textContent = questionArray[currentIndex].options[3];
// }


function displayQuestion () {
    questionH2.textContent = questionArray[currentIndex].text;
    button1.textContent = questionArray[currentIndex].options[0];
    button2.textContent = questionArray[currentIndex].options[1];
    button3.textContent = questionArray[currentIndex].options[2];
    button4.textContent = questionArray[currentIndex].options[3];

    var option = qContainer.querySelectorAll(".quiz-buttons");
    for (var i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

function optionSelected(answer) {
    var userOption = answer.textContent;
    var correctOption = questionArray[currentIndex].answer;
    if (userOption == correctOption) {
        points = points + 10;
        // Need a correct answer indicator
    } else {
        // 5 second time reduction 
    }
}


// This function moves the user to the next question
function nextQuestion() {
    if (currentIndex < questionArray.length - 1) {
    currentIndex++;
    displayQuestion();
    } else {
        console.log("done");
    }
}
// Event Listeners for user "click" that moves to next question
button1.addEventListener("click", nextQuestion);
button2.addEventListener("click", nextQuestion);
button3.addEventListener("click", nextQuestion);
button4.addEventListener("click", nextQuestion);
button5.addEventListener("click", startQuiz);

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

// Question accuracy function


function startQuiz() {
    sContainer.setAttribute("style", "display: none");
    qContainer.setAttribute("style", "display: flex");
    startTimer();
    displayQuestion();
}