// Add function to clicking "Start" button
var startButton = document.querySelector("#start-button");
var highScores = document.querySelector("#high-scores")
startButton.addEventListener("click", startGame);


// Start button function
function startGame() {

    // Removes button for game start and high scores
    startButton.remove();
    highScores.remove();

    // Creates scorekeeping variables
    var scoreBox = document.createElement("p");
    var scoreTitle = document.createTextNode("Current Score: ");
    var currentScore = document.createTextNode(0)
    scoreBox.appendChild(scoreTitle);
    scoreBox.appendChild(currentScore);

    // Inserts scorekeeping element into header and assigns style 
    var titleElement = document.querySelector("header");
    var timer = document.querySelector("#timer");
    titleElement.insertBefore(scoreBox, timer);
    scoreBox.setAttribute("style", "font-size: 35px; padding: 15px 65px; position: relative; right: 10%;" );

    // Creates question 
    var body = document.querySelector("body");
    var questionOne = document.createElement("section");
    questionOne.setAttribute("id", "question");
    var questionBox = document.createElement("h2");
    var questionText = document.createTextNode("Blah blah blah");
    body.appendChild(questionOne);
    questionOne.appendChild(questionBox);
    questionBox.appendChild(questionText);

    // Creates Answer List
    var answerList = document.createElement("ul");
    questionOne.appendChild(answerList);

    var answerOne = document.createElement("button");
    answerList.appendChild(answerOne);
    answerOne.textContent = "This is the first answer";

    var answerTwo = document.createElement("button");
    answerList.appendChild(answerTwo);
    answerTwo.textContent = "This is the second answer";

    var answerThree = document.createElement("button");
    answerList.appendChild(answerThree);
    answerThree.textContent = "This is the third answer";

    var answerFour = document.createElement("button");
    answerList.appendChild(answerFour);
    answerFour.textContent = "This is the fourth answer";
    
    answerOne.addEventListener("click", console.log("Correct"));
    answerTwo.addEventListener("click", console.log("Incorrect"));
    answerThree.addEventListener("click", console.log("Incorrect"));
    answerFour.addEventListener("click", console.log("Incorrect"));
}