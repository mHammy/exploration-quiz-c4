// Elements required
scoreList = document.getElementById("score-list");
retryButton = document.getElementById("retry-button");

// Grabbing the local storage information and throwing it in an array
var scores = JSON.parse(localStorage.getItem("userScore")) || [];


// addScore();
displayScore();

// function addScore() {
//     scores.sort(function (a, b) {
//         return b.scores - a.scores;
//     });
    
// };

function displayScore() {

    for (i = 0; i < scores.length; i+= 1) {
        var liTag = document.createElement("li")
        liTag.textContent = (scores[i].highscore + " " + "|" + " " + scores[i].initials);
         scoreList.appendChild(liTag);
    }

};

retryButton.addEventListener("click", function(event) {
    event.preventDefault();

    location.href = "./index.html";
});