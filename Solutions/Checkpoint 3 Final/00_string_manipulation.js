const vowelsCount = str => {
  const vowels = 'aeiou';

  const everyCharacter = str.split('');

  return everyCharacter.reduce((vowelCount, character) => {
    if (vowels.includes(character.toLowerCase())) {
      vowelCount++;
    }
    return vowelCount;
  }, 0);
};
