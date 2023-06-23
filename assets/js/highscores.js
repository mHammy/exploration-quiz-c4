scoreList = document.getElementById("score-list");
retryButton = document.getElementById("retry-button");

var scores = JSON.parse(localStorage.getItem("userScore")) || [];

addScore();
displayScore();

function addScore() {
    scores.sort(function (a, b) {
        return b.score - a.score;
    });
    
}
//Ask Tutor
function displayScore() {
    var li = document.createElement("li")
    li.textContent = (scores.highscore + " " + "|" + " " + scores.initials);
    scoreList.appendChild(li);

    for (i = 0; i < scores.length; i+= 1) {
        var liTag = document.createElement("li")
        liTag.textContent = (scores.highscore + " " + "|" + " " + scores.initials);
         scoreList.appendChild(liTag);
    }

}

retryButton.addEventListener("click", function(event) {
    event.preventDefault();

    location.href = "./index.html";
})