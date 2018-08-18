class RopeDude {
  constructor(secretWord) {
    console.log('new RopeDude: ', secretWord);

    this.secretWord = secretWord.split('');
    this.remainingGuesses = 6;
    this.lettersGuessed = [];
    this.correctLetters = []
    this.gameState = 'playing';
  }

  setSecretWord(secretWord) {
    this.secretWord = secretWord.split('');
  }

  computeGameState() {
    if (this.checkWin()) {
      this.gameState = 'won';
    } else if (this.remainingGuesses < 1) {
      this.gameState = 'lost';
    } else {
      this.gameState = 'playing';
    }
  }

  checkWin() {
    for (let i = 0; i < this.secretWord.length; i++) {
      const char = this.secretWord[i];
      if (this.lettersGuessed.indexOf(char) === -1) {
        return false;
      }
    }
    return true;
  }

  getSecretWordPuzzle() {
    let result = '';
    for (let i = 0; i < this.secretWord.length; i++) {
      const char = this.secretWord[i];

      if (this.correctLetters.indexOf( this.secretWord[i]) > -1) {
        result += char;
      } else if (char === ' ') {
        result += ' ';
      } else {
        result += '#';
      }
      
    }
    return result;
  }

  getGameStateMessage() {
    let message = '';

    if (this.gameState === 'playing') {
      message = `There is a total of ${this.remainingGuesses} guesses remaining:\n`;
      message += ASCIIART[this.remainingGuesses];
      return message;
    } else if (this.gameState === 'lost') {
      message = `Game Over, the word was \"${this.secretWord.join('')}\":\n`;
      message += ASCIIART[this.remainingGuesses];
      return message;
    } else {
      return 'Winner Winner Chicken Dinner, you won!';
    }
    
  }

  

  submitGuess(char) {
    if (this.gameState === 'lost') {
      return;
    }
    // console.log('-----------------------------');

    const lowerChar = char.toLowerCase();
    if (this.lettersGuessed.indexOf(lowerChar) === -1) {
      this.lettersGuessed.push(lowerChar);

      // console.log('this.secretWord.indexOf', this.secretWord.indexOf(lowerChar));


      if (this.secretWord.indexOf(lowerChar) > -1) {
        // console.log('submitGuess HIT', lowerChar);
        this.correctLetters.push(lowerChar);
      } else {        
        //if letter is not in word
        this.remainingGuesses--;
        // console.log('submitGuess MISS', lowerChar);
        // console.log('\t remainingGuesses', this.remainingGuesses);

      }
    } else {
      console.log('submitGuess DUPE', lowerChar);
    }
    console.log('submitGuess', char, this.lettersGuessed);
  }
}


function simulateRopeDude(pString) {
  const characters =['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const game = new RopeDude(secretWord);
  
  function playRopeDude() {
    if(game.gameState !== 'playing'){
      return game.getGameStateMessage();
    } else {
      const randomIndex = Math.floor(Math.random() * 26);
      const guess = characters[randomIndex];
      game.submitGuess(guess);
      game.computeGameState();
      return playRopeDude();
    }
  }

  return playRopeDude();
}




// let game = new RopeDude('fidgety');
// console.log('dude', game.secretWord.toString());
// game.submitGuess('f'); //6 = hit // correct guesses do not decrease the amount of guesses remaining
// game.submitGuess('Z'); //5 = miss
// game.submitGuess('g'); //5 = hit
// game.submitGuess('F'); //5 = repeat
// game.submitGuess('a'); //4 = miss
// game.submitGuess('T'); //4 = hit
// game.submitGuess('B'); //3 = miss

let game = new RopeDude('tangerine');
console.log('game.secretWord', game.secretWord.toString());
game.submitGuess('t'); //hit 6
game.submitGuess('E'); //hit 6
game.submitGuess('z'); //miss 5
game.submitGuess('s'); //miss 4
game.gameState = 'lost'; // manually setting the gameState to "lost" to test the "lost" state

game.submitGuess('n'); //hit 4
game.submitGuess('o'); //miss 3
game.submitGuess('b'); //miss 2
game.submitGuess('p'); //miss 1

console.log('-----------------------------');
console.log('-----------------------------');
console.log('-----------------------------');

// What is ASCIIART? Check the README.md or Workshop to see why ASCIIART is defined in your file.
const ASCIIART = [
  `
  +---+
  |   |
  O   |
 /|\\\  |
 / \\\  |
      |
=========`,
  `
  +---+
  |   |
  O   |
 /|\\\  |
 /    |
      |
      
=========`,
  `
  +---+
  |   |
  O   |
 /|\\\  |
      |
      |
=========`,
  `
  +---+
  |   |
  O   |
 /|   |
      |
      |
=========`,
  `
  +---+
  |   |
  O   |
  |   |
      |
      |
=========`,
  `
  +---+
  |   |
  O   |
      |
      |
      |
=========`,
  `
  +---+
  |   |
      |
      |
      |
      |
=========`
];
