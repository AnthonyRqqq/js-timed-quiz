// Add function to clicking "Start" button
var header = document.querySelector("header")
var startButton = document.querySelector("#start-button");
var highScoreDisplay = document.querySelector("#high-scores")
var instructions = document.querySelector("#instructions")
startButton.addEventListener("click", startGame);

// Creates function for timer countdown
var timer = document.querySelector("#timer");
var secondsLeft = 60;
function countdown() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = secondsLeft;

        if(secondsLeft <= 0) {
            timer.textContent = "Time's Up!";
            secondsLeft = 0;
        }
    }, 1000);
}

var highScores = {
    one: [0, ""],
    two: [0, ""],
    three: [0, ""],
}
localStorage.setItem("high-scores", JSON.stringify(highScores));
var sortedHighScores = JSON.parse(localStorage.getItem("high-scores"));
var lastScore = JSON.parse(localStorage.getItem("new-score"));
if (sortedHighScores && lastScore) {
    sortedHighScores.highscore4 = lastScore;
}
// Convert the object into an array of key-value pairs
var entries = Object.entries(sortedHighScores);
// Sort the array based on the values
var sortedEntries = entries.sort((a, b) => b[1][0] - a[1][0]);
// Create a new object from the sorted array
var newHighScores = {};
sortedEntries.forEach((entry, index) => {
    var newKey = `highscore${index + 1}`;
    newHighScores[newKey] = entry[1];
  });
  highScores = newHighScores;
  localStorage.setItem("high-scores", JSON.stringify(highScores));

//Code for above lines from XpertLearningAssistant

// Displays recorded high scores
var highScoreOne = document.getElementById("high-score-one");
var highScoreTwo = document.getElementById("high-score-two");
var highScoreThree = document.getElementById("high-score-three");

highScoreOne.textContent = Object.values(highScores)[0];
highScoreTwo.textContent = Object.values(highScores)[1];
highScoreThree.textContent = Object.values(highScores)[2];

// Start button function
function startGame() {
countdown();

    // Removes button for game start and high scores
    startButton.remove();
    highScoreDisplay.remove();
    instructions.remove();

    // Creates scorekeeping variables
    var scoreBox = document.createElement("p");
    var scoreTitle = document.createTextNode("Current Score: ");
    var currentScore = document.createTextNode(0);
    scoreBox.appendChild(scoreTitle);
    scoreBox.appendChild(currentScore);

    // Inserts scorekeeping element into header and assigns style 
    var titleElement = document.querySelector("header");
    var timer = document.querySelector("#timer");
    titleElement.insertBefore(scoreBox, timer);
    scoreBox.setAttribute("style", "font-size: 35px; padding: 15px 65px; position: relative; right: 10%;" );

    // Creates function for incorrect answer choice
    function incorrectAnswer() {
        secondsLeft -= 10;
        timer.textContent = secondsLeft;
        if (secondsLeft <= 0) {
            question.remove();
            gameOver();
            return;
        } else {
            question.remove();
        }
    }

    // Creates function for correct answer choice
    function correctAnswer() {
        //Updates score text and saves it to local storage
        currentScore.textContent = parseInt(currentScore.textContent) + 25;
        localStorage.setItem("final-score", currentScore.textContent);
        if (secondsLeft <= 0) {
            question.remove();
            gameOver();
            return;
        } else {
            question.remove();
        }
    }
    
    // Resets saved score and begins chain of questions
    resetScore();
    firstQuestion();
    
    // Creates first question and resets score
    // Correct answer is #3
    function firstQuestion() {
        localStorage.setItem("final-score", currentScore.textContent);
        var body = document.querySelector("body");
        var question = document.createElement("section");
        question.setAttribute("id", "question");
        var questionBox = document.createElement("h2");
        var questionText = document.createTextNode("The condition of an if/else statement is enclosed within ___.");
        body.appendChild(question);
        question.appendChild(questionBox);
        questionBox.appendChild(questionText);

        // Creates Answer List
        var answerList = document.createElement("ul");
        question.appendChild(answerList);

        var answerOne = document.createElement("button");
        answerList.appendChild(answerOne);
        answerOne.textContent = "1: quotes";

        var answerTwo = document.createElement("button");
        answerList.appendChild(answerTwo);
        answerTwo.textContent = "2: curly brackets";

        var answerThree = document.createElement("button");
        answerList.appendChild(answerThree);
        answerThree.textContent = "3: parenthesis";

        var answerFour = document.createElement("button");
        answerList.appendChild(answerFour);
        answerFour.textContent = "4: square brackets";
        
        // Adds to score when correct answer is selected. Subtracts from time otherwise
        answerOne.addEventListener("click", function() {
            incorrectAnswer();
            secondQuestion();
        });
        answerTwo.addEventListener("click", function() {
            incorrectAnswer();
            secondQuestion();
        });   
        answerThree.addEventListener("click", function() {
            correctAnswer();
            secondQuestion();
        });    
        answerFour.addEventListener("click", function() {
            incorrectAnswer();
            secondQuestion();
        });
    } 

    // Correct answer is #2
    function secondQuestion() {
        var body = document.querySelector("body");
        var question = document.createElement("section");
        question.setAttribute("id", "question");
        var questionBox = document.createElement("h2");
        var questionText = document.createTextNode("String values must be enclosed within ___ when being assigned to variables.");
        body.appendChild(question);
        question.appendChild(questionBox);
        questionBox.appendChild(questionText);

        // Creates Answer List
        var answerList = document.createElement("ul");
        question.appendChild(answerList);

        var answerOne = document.createElement("button");
        answerList.appendChild(answerOne);
        answerOne.textContent = "1: parenthesis";

        var answerTwo = document.createElement("button");
        answerList.appendChild(answerTwo);
        answerTwo.textContent = "2: quotes";

        var answerThree = document.createElement("button");
        answerList.appendChild(answerThree);
        answerThree.textContent = "3: commas";

        var answerFour = document.createElement("button");
        answerList.appendChild(answerFour);
        answerFour.textContent = "4: curly brackets";
        
        // Adds to score when correct answer is selected. Subtracts from time otherwise
        answerOne.addEventListener("click", function() {
            incorrectAnswer();
            thirdQuestion();
        });
        answerTwo.addEventListener("click", function() {
            correctAnswer();
            thirdQuestion();
        });   
        answerThree.addEventListener("click", function() {
            incorrectAnswer();
            thirdQuestion();
        });    
        answerFour.addEventListener("click", function() {
            incorrectAnswer();
            thirdQuestion();
        });
    } 

    // Correct answer is #1
    function thirdQuestion() {
        var body = document.querySelector("body");
        var question = document.createElement("section");
        question.setAttribute("id", "question");
        var questionBox = document.createElement("h2");
        var questionText = document.createTextNode("Which is NOT a commonly used data type?");
        body.appendChild(question);
        question.appendChild(questionBox);
        questionBox.appendChild(questionText);

        // Creates Answer List
        var answerList = document.createElement("ul");
        question.appendChild(answerList);

        var answerOne = document.createElement("button");
        answerList.appendChild(answerOne);
        answerOne.textContent = "1: Alerts";

        var answerTwo = document.createElement("button");
        answerList.appendChild(answerTwo);
        answerTwo.textContent = "2: Strings";

        var answerThree = document.createElement("button");
        answerList.appendChild(answerThree);
        answerThree.textContent = "3: Booleans";

        var answerFour = document.createElement("button");
        answerList.appendChild(answerFour);
        answerFour.textContent = "4: Numbers";
        
        // Adds to score when correct answer is selected. Subtracts from time otherwise
        answerOne.addEventListener("click", function() {
            correctAnswer();
            fourthQuestion();
        });
        answerTwo.addEventListener("click", function() {
            incorrectAnswer();
            fourthQuestion();
        });   
        answerThree.addEventListener("click", function() {
            incorrectAnswer();
            fourthQuestion();
        });    
        answerFour.addEventListener("click", function() {
            incorrectAnswer();
            fourthQuestion();
        });
    } 

    // Answer is #4
    function fourthQuestion() {
        var body = document.querySelector("body");
        var question = document.createElement("section");
        question.setAttribute("id", "question");
        var questionBox = document.createElement("h2");
        var questionText = document.createTextNode("Arrays in JavaScript can store ___.");
        body.appendChild(question);
        question.appendChild(questionBox);
        questionBox.appendChild(questionText);

        // Creates Answer List
        var answerList = document.createElement("ul");
        question.appendChild(answerList);

        var answerOne = document.createElement("button");
        answerList.appendChild(answerOne);
        answerOne.textContent = "1: other arrays";

        var answerTwo = document.createElement("button");
        answerList.appendChild(answerTwo);
        answerTwo.textContent = "2: booleans";

        var answerThree = document.createElement("button");
        answerList.appendChild(answerThree);
        answerThree.textContent = "3: numbers and strings";

        var answerFour = document.createElement("button");
        answerList.appendChild(answerFour);
        answerFour.textContent = "4: All of the above";
        
        // Adds to score when correct answer is selected. Subtracts from time otherwise
        answerOne.addEventListener("click", function() {
            incorrectAnswer();
            secondsLeft = 0;
            gameOver();
        });
        answerTwo.addEventListener("click", function() {
            incorrectAnswer();
            secondsLeft = 0;
            gameOver();
        });   
        answerThree.addEventListener("click", function() {
            incorrectAnswer();
            secondsLeft = 0;
            gameOver();
        });    
        answerFour.addEventListener("click", function() {
            correctAnswer();
            secondsLeft = 0;
            gameOver();
        });
    } 
}

//Runs at end of quiz
function gameOver() {
    recordScore();
    location.reload();
}

//  Records most recent score
function recordScore() {
    var finalScore = localStorage.getItem("final-score");
    parseInt(finalScore);
    if (parseInt(finalScore) === 0) {
        alert("Your final score was 0. Please try again.")
        return;
    } else {
        var saveScore = prompt("Congratulations! Your score was " + finalScore + "! Please enter your intials to save your score.");
        if (saveScore.length > 3) {
            alert("Please enter no more than three letters for your initials.");
            recordScore();
        }
    }

    // Saves most recent score to local storage
    localStorage.setItem("initials", saveScore);
    initials = localStorage.getItem("initials");
    newScore = [parseInt(finalScore), initials];
    localStorage.setItem("new-score", JSON.stringify(newScore));


    
    if (Object.keys(highScores).length > 3) {
        var keys = Object.keys(highScores);
        var lowestScore = keys.reduce((a, b) => (highScores[a][0] < highScores[b][0] ? a : b));
        delete highScores[lowestScore];
    } // Asistance for code from above block
}

function resetScore () {
    var previousScore = localStorage.getItem("final-score");
    if (parseInt(previousScore) !== 0) {
        localStorage.setItem("final-score", 0);
    }
}

