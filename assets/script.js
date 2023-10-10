// Add function to clicking "Start" button
var startButton = document.querySelector("#start-button");
var highScores = document.querySelector("#high-scores")
startButton.addEventListener("click", startGame);


// Creates function for timer countdown
var timer = document.querySelector("#timer");
var secondsLeft = 60;
function countdown() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = secondsLeft;

        if(secondsLeft <= 0 ) {
            timer.textContent = "Time's Up!";
            secondsLeft = 0;
        }
    }, 1000);
}

// Start button function
function startGame() {
countdown();

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

    firstQuestion();
    // Creates question 
    function firstQuestion() {
        var body = document.querySelector("body");
        var question = document.createElement("section");
        question.setAttribute("id", "question");
        var questionBox = document.createElement("h2");
        var questionText = document.createTextNode("Blah blah blah");
        body.appendChild(question);
        question.appendChild(questionBox);
        questionBox.appendChild(questionText);

        // Creates Answer List
        var answerList = document.createElement("ul");
        question.appendChild(answerList);

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
        
        // Adds to score when correct answer is selected. Subtracts from time otherwise
        answerOne.addEventListener("click", function() {
            currentScore.textContent = parseInt(currentScore.textContent) + 25;
            if (secondsLeft <= 0) {
                question.remove();
                return;
            } else {
                question.remove();
            }
            secondQuestion();
        });
        answerTwo.addEventListener("click", function() {
            secondsLeft -= 10;
            timer.textContent = secondsLeft;
            if (secondsLeft <= 0) {
                question.remove();
                return;
            } else {
                question.remove();
            }
            secondQuestion();
        });   
        answerThree.addEventListener("click", function() {
            secondsLeft -= 10;
            timer.textContent = secondsLeft;
            if (secondsLeft <= 0) {
                question.remove();
                return;
            } else {
                question.remove();
            }
            secondQuestion();
        });    
        answerFour.addEventListener("click", function() {
            secondsLeft -= 10;
            timer.textContent = secondsLeft;
            if (secondsLeft <= 0) {
                question.remove();
                return;
            } else {
                question.remove();
            }
            secondQuestion();
            });
    } 

    function secondQuestion() {
        var body = document.querySelector("body");
        var question = document.createElement("section");
        question.setAttribute("id", "question");
        var questionBox = document.createElement("h2");
        var questionText = document.createTextNode("Blah blah blah");
        body.appendChild(question);
        question.appendChild(questionBox);
        questionBox.appendChild(questionText);

        // Creates Answer List
        var answerList = document.createElement("ul");
        question.appendChild(answerList);

        var answerOne = document.createElement("button");
        answerList.appendChild(answerOne);
        answerOne.textContent = "This is the first answer of the second question";

        var answerTwo = document.createElement("button");
        answerList.appendChild(answerTwo);
        answerTwo.textContent = "This is the second answer";

        var answerThree = document.createElement("button");
        answerList.appendChild(answerThree);
        answerThree.textContent = "This is the third answer";

        var answerFour = document.createElement("button");
        answerList.appendChild(answerFour);
        answerFour.textContent = "This is the fourth answer";
        
        // Adds to score when correct answer is selected. Subtracts from time otherwise
        answerOne.addEventListener("click", function() {
            currentScore.textContent = parseInt(currentScore.textContent) + 25;
            if (secondsLeft <= 0) {
                question.remove();
                return;
            } else {
                question.remove();
            }
            thirdQuestion();
        });
        answerTwo.addEventListener("click", function() {
            secondsLeft -= 10;
            timer.textContent = secondsLeft;
            if (secondsLeft <= 0) {
                question.remove();
                return;
            } else {
                question.remove();
            }
            thirdQuestion();
        });   
        answerThree.addEventListener("click", function() {
            secondsLeft -= 10;
            timer.textContent = secondsLeft;
            if (secondsLeft <= 0) {
                question.remove();
                return;
            } else {
                question.remove();
            }
            thirdQuestion();
        });    
        answerFour.addEventListener("click", function() {
            secondsLeft -= 10;
            timer.textContent = secondsLeft;
            if (secondsLeft <= 0) {
                question.remove();
                return;
            } else {
                question.remove();
            }
            thirdQuestion();
            });
    } 

    function thirdQuestion() {
        var body = document.querySelector("body");
        var question = document.createElement("section");
        question.setAttribute("id", "question");
        var questionBox = document.createElement("h2");
        var questionText = document.createTextNode("Blah blah blah");
        body.appendChild(question);
        question.appendChild(questionBox);
        questionBox.appendChild(questionText);

        // Creates Answer List
        var answerList = document.createElement("ul");
        question.appendChild(answerList);

        var answerOne = document.createElement("button");
        answerList.appendChild(answerOne);
        answerOne.textContent = "This is the first answer of the third question";

        var answerTwo = document.createElement("button");
        answerList.appendChild(answerTwo);
        answerTwo.textContent = "This is the second answer";

        var answerThree = document.createElement("button");
        answerList.appendChild(answerThree);
        answerThree.textContent = "This is the third answer";

        var answerFour = document.createElement("button");
        answerList.appendChild(answerFour);
        answerFour.textContent = "This is the fourth answer";
        
        // Adds to score when correct answer is selected. Subtracts from time otherwise
        answerOne.addEventListener("click", function() {
            currentScore.textContent = parseInt(currentScore.textContent) + 25;
            if (secondsLeft <= 0) {
                question.remove();
                return;
            } else {
                question.remove();
            }
            fourthQuestion();
        });
        answerTwo.addEventListener("click", function() {
            secondsLeft -= 10;
            timer.textContent = secondsLeft;
            if (secondsLeft <= 0) {
                question.remove();
                return;
            } else {
                question.remove();
            }
            fourthQuestion();
        });   
        answerThree.addEventListener("click", function() {
            secondsLeft -= 10;
            timer.textContent = secondsLeft;
            if (secondsLeft <= 0) {
                question.remove();
                return;
            } else {
                question.remove();
            }
            fourthQuestion();
        });    
        answerFour.addEventListener("click", function() {
            secondsLeft -= 10;
            timer.textContent = secondsLeft;
            if (secondsLeft <= 0) {
                question.remove();
                return;
            } else {
                question.remove();
            }
            fourthQuestion();
            });
    } 

    function fourthQuestion() {
        var body = document.querySelector("body");
        var question = document.createElement("section");
        question.setAttribute("id", "question");
        var questionBox = document.createElement("h2");
        var questionText = document.createTextNode("Blah blah blah");
        body.appendChild(question);
        question.appendChild(questionBox);
        questionBox.appendChild(questionText);

        // Creates Answer List
        var answerList = document.createElement("ul");
        question.appendChild(answerList);

        var answerOne = document.createElement("button");
        answerList.appendChild(answerOne);
        answerOne.textContent = "This is the first answer of the fourth question";

        var answerTwo = document.createElement("button");
        answerList.appendChild(answerTwo);
        answerTwo.textContent = "This is the second answer";

        var answerThree = document.createElement("button");
        answerList.appendChild(answerThree);
        answerThree.textContent = "This is the third answer";

        var answerFour = document.createElement("button");
        answerList.appendChild(answerFour);
        answerFour.textContent = "This is the fourth answer";
        
        // Adds to score when correct answer is selected. Subtracts from time otherwise
        answerOne.addEventListener("click", function() {
            currentScore.textContent = parseInt(currentScore.textContent) + 25;
            if (secondsLeft <= 0) {
                question.remove();
                return;
            } else {
                question.remove();
            }
        });
        answerTwo.addEventListener("click", function() {
            secondsLeft -= 10;
            timer.textContent = secondsLeft;
            if (secondsLeft <= 0) {
                question.remove();
                return;
            } else {
                question.remove();
            }
        });   
        answerThree.addEventListener("click", function() {
            secondsLeft -= 10;
            timer.textContent = secondsLeft;
            if (secondsLeft <= 0) {
                question.remove();
                return;
            } else {
                question.remove();
            }
        });    
        answerFour.addEventListener("click", function() {
            secondsLeft -= 10;
            timer.textContent = secondsLeft;
            if (secondsLeft <= 0) {
                question.remove();
                return;
            } else {
                question.remove();
            }
            });
    } 
}