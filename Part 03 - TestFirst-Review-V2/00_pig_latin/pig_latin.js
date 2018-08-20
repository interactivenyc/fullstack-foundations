function pigify(phrase) {
    let wordArray = phrase.split(' ');
    let vowels = 'aeiou';
    // console.log('wordArray', wordArray);
    

    for (let i=0; i<wordArray.length; i++) {
        let word = wordArray[i];
        // console.log('word', word);
        
        for (let j = 0; j < word.length; j++) {
            let letter = word[j];
            if (vowels.includes(letter)) {
                if (letter !== 'u' || (letter === 'u' && word[j - 1] !== 'q')) {
                    // console.log('word', j, word.substring(0, j), ':', word.substring(j, word.length));
                    let pigWord = word.substring(j, word.length) + word.substring(0, j) + 'ay';
                    wordArray[i] = pigWord;
                    break;
                }
            }
        }
    }
    console.log('pigify', wordArray.join(' '));
    return wordArray.join(' ');
}

pigify('when the lights go out in the city');


