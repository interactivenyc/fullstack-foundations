/* eslint-disable no-undef */

describe('search', () => {
  it('operates on an array, takes a function and returns a boolean', () => {
    const result = search.call([], function() {});
    expect(result).toEqual(jasmine.any(Boolean));
  });

  it('uses the given matching function to find an element in the contextual array', () => {
    const arr = ['yellow', 13, {}, 'something else'];
    let result;

    result = search.call(arr, function(val) {
      return val === 13;
    });
    expect(result).toEqual(true); // arr contains 13

    result = search.call(arr, function(val) {
      return typeof val === 'function';
    });
    expect(result).toEqual(false); // arr does not contain a function
  });

  it('looks into any nested arrays', () => {
    let arr;
    let result;

    arr = ['a', ['b', ['c', ['d'], 'e'], 'f'], ['g'], 'h', [['i'], 'j']];
    result = search.call(arr, val => {
      return val === 'd';
    });
    expect(result).toEqual(true);
    result = search.call(arr, val => {
      return val === 'z';
    });
    expect(result).toEqual(false);

    arr = [
      [1, 2, [3, [[4], [5], [6]], 7, 8, 9, [10]]],
      11,
      [[12], [[13, 14]]],
      15,
    ];
    result = search.call(arr, val => {
      return val > 9;
    });
    expect(result).toEqual(true);
    result = search.call(arr, val => {
      return val % 17 === 0;
    });
    expect(result).toEqual(false);
  });

  it('is recursive', () => {
		// this checks that search is invoked with .call or .apply
		// this makes it recursive because the function is called within
		// its code block.
    expect(search.toString()).toMatch(/search.(call|apply)/);
  });
});
