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

    // Creates function for incorrect answer choice
    function incorrectAnswer() {
        secondsLeft -= 10;
        timer.textContent = secondsLeft;
        if (secondsLeft <= 0) {
            question.remove();
            return;
        } else {
            question.remove();
        }
    }

    // Creates function for correct answer choice
    function correctAnswer() {
        currentScore.textContent = parseInt(currentScore.textContent) + 25;
        if (secondsLeft <= 0) {
            question.remove();
            return;
        } else {
            question.remove();
        }
    }
    
    firstQuestion();
    // Creates first question and begins chain of questions 
    // Correct answer is #3
    function firstQuestion() {
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
        var questionText = document.createTextNode("Which is not a commonly used data type?");
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
            correctAnswer();
        });
        answerTwo.addEventListener("click", function() {
            incorrectAnswer();
        });   
        answerThree.addEventListener("click", function() {
            incorrectAnswer();
        });    
        answerFour.addEventListener("click", function() {
            incorrectAnswer();
        });
    } 
}