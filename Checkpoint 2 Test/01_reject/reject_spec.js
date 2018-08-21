describe('reject function', () => {
  window.isNegNum; // attaches the function isNegNum to the global window object
  window.greaterThanThree;

  it("returns the values in the array that returned 'false' after the function argument is invoked", () => {
    let arrayOfNumbers = [4, -57, 1778, -43, 9, 89, -345];
    isNegNum = num => {
      return num < 0;
    };

    let positiveNumsOnly = reject(arrayOfNumbers, isNegNum);
    expect(positiveNumsOnly).toEqual([4, 1778, 9, 89]);
  });

  it('returns the words in the array that returned `false` after the function argument is invoked', () => {
    let arrayOfWords = [
      'testing',
      'bye',
      'fly',
      'hello',
      'too',
      'zoo',
      'pie',
      'function',
    ];

    greaterThanThree = word => {
      return word.length > 3;
    };

    let wordsLessThanThree = reject(arrayOfWords, greaterThanThree);
    expect(wordsLessThanThree).toEqual(['bye', 'fly', 'too', 'zoo', 'pie']);
  });

  it('checks that `isNegNum` and `greaterThanThree` are called when passed to `reject` function', () => {
    spyOn(window, 'isNegNum').and.callThrough(); // checks if the function passed to reject is invoked
    spyOn(window, 'greaterThanThree').and.callThrough();

    reject([-4, 5, 10], isNegNum);
    reject(['one', 'three', 'five', 'three'], greaterThanThree);

    expect(window.isNegNum).toHaveBeenCalled();
    expect(window.greaterThanThree).toHaveBeenCalled();
  });
});
