// Jeffrey Osterkamp
// June 28, 2026

"use strict";

/*
PLANNING / PSEUDOCODE

1. Start score at 0.

2. Ask four personal questions:
   - Favorite football team (Chiefs)
   - Favorite pet (Frank)
   - Favorite hobby (Board games)
   - Favorite number (7)

3. Validate each answer.
   - If the answer is blank, alert the user.
   - Otherwise compare it to the correct answer.

4. Increase score for each correct answer.

5. Calculate percentage using math.

6. Give feedback based on score.

Logical operators:
- && checks for non-empty answers.
- || checks if score is 3 or 4.
- ! checks if answer is blank.
*/

console.log("=== My Quiz Game ===");

// Initialize score
let score = 0;

// --------------------
// Question 1
// --------------------

let chiefsAnswer = prompt("What is my favorite NFL team?");

if (chiefsAnswer && chiefsAnswer.trim() !== "") {

    chiefsAnswer = chiefsAnswer.toLowerCase();

    if (chiefsAnswer === "chiefs" || chiefsAnswer === "kansas city chiefs") {
        console.log("Question 1: Correct");
        score++;
    } else {
        console.log("Question 1: Incorrect");
    }

} else {
    alert("Please enter an answer.");
}

// --------------------
// Question 2
// --------------------

let frankAnswer = prompt("What is my dog's name?");

if (frankAnswer && frankAnswer.trim() !== "") {

    frankAnswer = frankAnswer.toLowerCase();

    if (frankAnswer === "frank") {
        console.log("Question 2: Correct");
        score++;
    } else {
        console.log("Question 2: Incorrect");
    }

} else {
    alert("Please enter an answer.");
}

// --------------------
// Question 3
// --------------------

let hobbyAnswer = prompt("One of my hobbies is playing what type of games?");

if (hobbyAnswer && hobbyAnswer.trim() !== "") {

    hobbyAnswer = hobbyAnswer.toLowerCase();

    if (hobbyAnswer === "board games") {
        console.log("Question 3: Correct");
        score++;
    } else {
        console.log("Question 3: Incorrect");
    }

} else {
    alert("Please enter an answer.");
}

// --------------------
// Question 4
// --------------------

let numberAnswer = prompt("What is 3 + 4?");

if (numberAnswer && numberAnswer.trim() !== "") {

    if (Number(numberAnswer) === 7) {
        console.log("Question 4: Correct");
        score++;
    } else {
        console.log("Question 4: Incorrect");
    }

} else {
    alert("Please enter an answer.");
}

// --------------------
// Calculate percentage
// --------------------

let percentage = (score / 4) * 100;

console.log("Score: " + score + "/4");
console.log("Percentage: " + percentage + "%");

// --------------------
// Feedback
// --------------------

if (score === 4) {

    alert("Perfect score! You got 4 out of 4!");

} else if (score === 3 || score === 4) {

    alert("Great job! You got " + score + " out of 4.");

} else if (score < 2 && score > 0) {

    alert("Keep practicing! You got " + score + " out of 4.");

} else if (score === 0) {

    alert("You missed every question. Try again!");
}

// --------------------
// Additional feedback
// --------------------

if (!(score === 4)) {
    console.log("There is still room to improve!");
} else {
    console.log("Excellent work!");
}

// --------------------
// Final summary
// --------------------

alert(
    "Quiz Complete!\n\n" +
    "Correct Answers: " + score + "/4\n" +
    "Percentage: " + percentage + "%\n\n" +
    "Thanks for taking my quiz!"
);