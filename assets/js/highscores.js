scoreList = document.getElementById("score-list");
retryButton = document.getElementById("retry-button");

var scores = JSON.parse(localStorage.getItem("userScore")) || [];
var foo = document.createElement("span")
foo = document.createTextNode("&nbsp;");

addScore();
displayScore();

function addScore() {
    scores.sort(function (a, b) {
        return b.score - a.score;
    });
    
}
//Ask Tutor
function displayScore() {

    for (i = 0; i < scores.length; i+= 1) {
        var liTag = document.createElement("li")
        liTag.textContent = (scores[i].highscore + " " + "|" + " " + scores[i].initials);
         scoreList.appendChild(liTag);
    }

}

retryButton.addEventListener("click", function(event) {
    event.preventDefault();

    location.href = "./index.html";
})