scoreList = document.getElementById("score-list");
retryButton = document.getElementById("retry-button");


retryButton.addEventListener("click", function(event) {
    event.preventDefault();

    location.href = "./index.html";
})