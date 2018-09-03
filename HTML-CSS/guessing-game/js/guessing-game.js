/* 

Write your guess-game code here! Don't forget to look at the test specs as a guide. You can run the specs
by running "testem".

In this file, you will also include the event listeners that are needed to interact with your HTML file when
a user clicks a button or adds a guess to the input field.

*/
let winningNumber;
let guesses = [];
let inputField;
let prompt;

function initialize() {
    console.log('initialize');
    
    inputField = document.getElementById('inputField');
    inputField.addEventListener('keydown', onKeyboardEvent);

    prompt = document.getElementById('prompt');
    prompt.innerHTML = 'Enter a number between 0 and 100';

    reset();
}

function onKeyboardEvent(e) {
    if (e.key === 'Enter') {
        console.log('onKeyboardEvent', e);
        guess();
    }
}

function guess() {
    let currentGuess = inputField.value;
    inputField.value = '';
    guesses.push(currentGuess);
    console.log('guess', currentGuess, guesses);

    if (currentGuess === winningNumber.toString()) {        
        prompt.innerHTML = 'You WIN!!!';
    } else if (guesses.length >= 5) {
        prompt.innerHTML = 'You LOSE!!!';
    } else {
        currentGuess < winningNumber ? prompt.innerHTML = 'Too Low' : prompt.innerHTML = 'Too High';
    }
    
}

function reset() {
    console.log('reset');
    guesses = [];
    generateWinningNumber();
}

function generateWinningNumber() {
    console.log('generateWinningNumber');

    winningNumber = Math.floor(Math.random() * 100);

    console.log('winningNumber', winningNumber);

}

