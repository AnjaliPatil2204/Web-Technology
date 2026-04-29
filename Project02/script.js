let randomNumber = Math.floor(Math.random() * 100) + 1;
let count = 0;

function checkGuess() {

    let userGuess = parseInt(document.getElementById("guess").value);
    let message = document.getElementById("message");
    let attempts = document.getElementById("attempts");

    if (isNaN(userGuess)) {
        message.innerHTML = "Please enter a valid number!";
        return;
    }

    count++;
    if(count<=10){
    if (userGuess === randomNumber) {
        message.innerHTML = "Correct! You guessed the number!";
        attempts.innerHTML = "Total Attempts: " + count;
    } 
    else if (userGuess > randomNumber) {
        message.innerHTML = "Too High! Try again.";
        attempts.innerHTML = "Remaining Attempts: " + (10-count);
    } 
    else {
        message.innerHTML = "Too Low! Try again.";
        attempts.innerHTML = "Remaining Attempts: " + (10-count);
    }
}
else{
    message.innerHTML = "Game Over! You've used all your attempts. The correct number was " + randomNumber + ".";
}
}