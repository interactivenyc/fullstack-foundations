/*

The following test specs challenge your imperative programming ability! The main
theme of each spec is to re-implement the traditional functional methods such as 
map and reduce. 

*/

/*

Re-Implement the Array.prototype.map method

*/

describe('the function map', () => {
  beforeEach(() => {
    // A spy is set to check if Array.prototype.map is called.
    spyOn(Array.prototype, 'map').and.callThrough();
  });

  // Where is doubler defined? This is something you may need to create...
  it('first, create a function that takes an element and returns double of it', () => {
    expect(doubler(15)).toEqual(30);
  });

  /* 
  
  Now let's use the `doubler` function and apply it over an
   entire array using a custom map function (that you need to create)

   the doubler function is only responsible for taking an input and returning
   an output, it doesn't produce side effects, it is a "pure" function
   
   the map function is responsible for
   - creating a new array
   - looping over the array argument
   - applying the function to each item in the array
   - storing the new values returned in the new array
   - returning the new array (the new array should be the same length as the original)
   

  */

  it('takes our doubling function and applies it to an array', () => {
    expect(map([1, 2, 3], doubler)).toEqual([2, 4, 6]);
  });

  it('takes a tripling function', () => {
    // Here we pass an arrow function to the map function (instead of the doubler fnc)
    expect(
      map([1, 2, 3], elem => {
        return elem * 3;
      })
    ).toEqual([3, 6, 9]);
  });

  it('should not use Array.prototype.map', () => {
    map([1, 2, 3], doubler);
    expect(Array.prototype.map.calls.any()).toEqual(false);
  });
});

/* - filter takes an array and function as arguments
   - the function passed to filter returns true or false
   - filter iterates on all values in the array and runs
   the function argument on each value. if the function returns
   true the value is added to the new array filter creates.
   - filter returns an array that qualifies the condition tested
   in the function argument. 
   - The array filter returns can vary
   in length (unlike the map function that that returns an
   array with the same length as the original)
*/

describe('the function filter', () => {
  beforeEach(() => {
    spyOn(Array.prototype, 'filter').and.callThrough();
  });

  // `evenFilter` returns true if a number is even
  const evenFilter = element => {
    if (element % 2 === 0) return true;
    else return false;
  };

  // `oddFilter` returns true if a number is odd
  const oddFilter = element => {
    return !evenFilter(element);
  };

  it('filters an array based on evens', () => {
    expect(filter([1, 2, 3, 4, 5, 6, 7, 8], evenFilter)).toEqual([2, 4, 6, 8]);
  });

  it('filters an array based on odds', () => {
    expect(filter([1, 2, 3, 4, 5, 6, 7, 8], oddFilter)).toEqual([1, 3, 5, 7]);
  });

  it('should not use Array.prototype.filter', () => {
    filter([1, 2, 3, 4, 5, 6, 7, 8], oddFilter);
    expect(Array.prototype.filter.calls.any()).toEqual(false);
  });
});

// the includes determines whether an array includes a certain element, returning true or false as appropriate
describe('the function includes', () => {
  beforeEach(() => {
    // You can't use the built in Array.prototype.reduce!
    spyOn(Array.prototype, 'includes').and.callThrough();
  });

  it('should return true if a collection includes a user-specified value', () => {
    expect(includes([1, 2, 3], 2)).toEqual(true);
    expect(
      includes(
        {
          moe: 1,
          larry: 3,
          curly: 9,
        },
        3
      )
    ).toEqual(true);
  });

  it('should return false if a collection does not contain a user-specified value', () => {
    expect(includes([1, 3, 9], 2)).toEqual(false);
  });

  it('does not call Array.prototype.reduce', () => {
    includes(['windows', 'mac', 'ubuntu'], 'ubuntu');
    expect(Array.prototype.includes.calls.any()).toEqual(false);
  });
});

// countWords is a pure function
describe("the function countWords is a utility functions we'll need soon", () => {
  it('the first argument is the starting value of the total count', () => {
    expect(countWords(0, 'count the words')).toEqual(3);
    expect(countWords(10, 'two words')).toEqual(12);
  });
  it('counts words in a sentence separated by empty space', () => {
    expect(countWords(0, 'this is a sentence with 7 words')).toEqual(7);
    expect(countWords(5, 'this is a sentence with 7 words')).toEqual(12);
    expect(countWords(6, 'count the words')).toEqual(9);
  });
});

// reduce takes a collection and combines/accumulates the values in the collection to a single value (the final value could be a string, number, object, etc...)
// Here is the method you are creating a variation of: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
describe('the function reduce', () => {
  let wordArray;

  beforeEach(() => {
    spyOn(Array.prototype, 'reduce').and.callThrough();
  });

  it('sums up the array', () => {
    let add = (a, b) => a + b;
    // reduce is accepts an array, starting value, and combining function
    expect(reduce([3, 5, 7], 0, add)).toEqual(15);
  });

  it('counts the number of words in an array of strings', () => {
    wordArray = ['hello there this is line 1', 'and this is line 2'];
    expect(reduce(wordArray, 0, countWords)).toEqual(11);
  });

  it('should not use Array.prototype.reduce', () => {
    reduce(wordArray, 0, countWords);
    expect(Array.prototype.reduce.calls.any()).toEqual(false);
  });
});

// Use reduce inside a sum function that takes an array of integers
describe('the sum function', () => {
  it('uses reduce to add up the numbers in an array', () => {
    expect(sum([1, 2, 3])).toEqual(6);
  });
});

/*
  These next two are very tricky!
  The functions every and any **should use the reduce function you created earlier**
  to combine the collections into a true or false value.
*/
describe('the function every', () => {
  // `every` tests if every element in this array passes the condition in the function
  // If all the values pass the condition, `every` returns `true`
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
  beforeEach(() => {
    spyOn(Array.prototype, 'every').and.callThrough();
    spyOn(Array.prototype, 'reduce').and.callThrough();
  });

  const isEven = num => {
    return num % 2 === 0;
  };

  const getValue = i => {
    return i;
  };

  it('should handle an empty set', () => {
    // This gives a hint of the starting value for reduce...
    expect(every([], getValue)).toEqual(true);
  });

  it('should handle a set that contains even numbers', () => {
    expect(every([0, 10, 28], isEven)).toEqual(true);
  });

  it('should handle a set that contains an odd number', () => {
    expect(every([0, 11, 28], isEven)).toEqual(false);
  });

  it('should not use Array.prototype.every or Array.prototype.reduce', () => {
    every([1, 2, 3], isEven);
    expect(Array.prototype.every.calls.any()).toEqual(false);
    expect(Array.prototype.reduce.calls.any()).toEqual(false);
    // use the reduce method you created in these exercises instead
  });
});

describe('the function any', () => {
  // if ONE value passes the condition, any returns true
  // this is similar to the every function, but only one value needs to meet the
  // condition of the callback function.
  beforeEach(() => {
    spyOn(Array.prototype, 'reduce').and.callThrough();
  });

  const isEven = number => {
    return number % 2 === 0;
  };

  it('should handle the empty set', () => {
    expect(any([])).toEqual(false);
  });

  it('should handle a set that contains all odd numbers', () => {
    expect(any([1, 11, 29], isEven)).toEqual(false);
  });

  it('should handle a set that contains an even number', () => {
    expect(any([1, 10, 29], isEven)).toEqual(true);
  });

  it('should not use the Array.prototype.reduce method', () => {
    any([0, 10, 28], isEven);
    expect(Array.prototype.reduce.calls.any()).toEqual(false);
    // use the reduce method you created in these exercises instead
  });
});
