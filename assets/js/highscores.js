// Elements required
var scoreList = document.getElementById("score-list");
var retryButton = document.getElementById("retry-button");

// Grabbing the local storage information and throwing it in an array
var scores = JSON.parse(localStorage.getItem("userScore")) || [];

sortScores();
displayScore();

function sortScores() {
    scores.sort(function (a, b) {
        return b.highscore- a.highscore;
    });
};

function displayScore() {
    for (i = 0; i < scores.length; i+= 1) {
        var liTag = document.createElement("li");
        var pScore = document.createElement("p");
        var pInitial = document.createElement("p");
        pScore.classList.add("score-side");
        pInitial.classList.add("initial-side");
        pScore.textContent = (scores[i].highscore);
        pInitial.textContent = (scores[i].initials);
        liTag.append(pScore, pInitial);
        scoreList.appendChild(liTag);
        
    }

};


retryButton.addEventListener("click", function(event) {
    event.preventDefault();

    location.href = "./index.html";
});