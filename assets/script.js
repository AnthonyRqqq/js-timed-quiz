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

    //Creates answers and adds to list
    var answerA = document.createElement("li");
    answerList.appendChild(answerA);
    answerABox = document.createElement("input");
    answerABox.setAttribute("type", "checkbox");
    answerABox.setAttribute("id", "answer-A")
    answerAText = document.createElement("label");
    answerAText.textContent = "Answer A";
    answerA.appendChild(answerABox);
    answerA.appendChild(answerAText);

    var answerB = document.createElement("li");
    answerList.appendChild(answerB);
    answerBBox = document.createElement("input");
    answerBBox.setAttribute("type", "checkbox");
    answerBBox.setAttribute("id", "answer-B")
    answerBText = document.createElement("label");
    answerBText.textContent = "Answer B";
    answerB.appendChild(answerBBox);
    answerB.appendChild(answerBText);

    var answerC = document.createElement("li");
    answerList.appendChild(answerC);
    answerCBox = document.createElement("input");
    answerCBox.setAttribute("type", "checkbox");
    answerCBox.setAttribute("id", "answer-C")
    answerCText = document.createElement("label");
    answerCText.textContent = "Answer C";
    answerC.appendChild(answerCBox);
    answerC.appendChild(answerCText);

    var answerD = document.createElement("li");
    answerList.appendChild(answerD);
    answerDBox = document.createElement("input");
    answerDBox.setAttribute("type", "checkbox");
    answerDBox.setAttribute("id", "answer-D");
    answerDText = document.createElement("label");
    answerDText.textContent = "Answer D";
    answerD.appendChild(answerDBox);
    answerD.appendChild(answerDText);

    // Create submit button
    var submitButton = document.createElement("button");
    submitButton.textContent = "Submit";
    submitButton.setAttribute("style", "font-size: 30px; background-color: #3a445d; color: white; padding: 5px");
    questionOne.appendChild(submitButton);



    // // Assigns variable to each possible answer
    // var answerA = document.querySelector("#answer-one");
    // var answerB = document.querySelector("#answer-two");
    // var answerC = document.querySelector("#answer-three");
    // var answerD = document.querySelector("#answer-four");

    // // Checks whether correct answer is selected or not
    // if (answerC && answerC.type === "checkbox" && answerC.checked) {
    //     currentScore + 25;
    //     console.log("Yes");
    // }
    // else {

    // }
}