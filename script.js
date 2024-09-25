// Generate a random number between 1 and 10
const targetNumber = Math.floor(Math.random() * 10) + 1;

// Function to check the user's guess
function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const messageElement = document.getElementById('message');

    // Get the user's guess from the input
    const userGuess = parseInt(guessInput.value);

    // Check if the guess is correct, too high, or too low
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        messageElement.textContent = 'Please enter a valid number between 1 and 10.';
    } else if (userGuess === targetNumber) {
        messageElement.textContent = 'Congratulations! You guessed the correct number!';
    } else if (userGuess < targetNumber) {
        messageElement.textContent = 'Too low! Try again.';
    } else {
        messageElement.textContent = 'Too high! Try again.';
    }

    // Clear the input for the next guess
    guessInput.value = '';
}
