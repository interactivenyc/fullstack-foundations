

describe("threeTimes function", () => {

  let returnFive;

  beforeEach(() => {
    returnFive = threeTimes(() => {
      return 5
    });
  });

  it('threeTimes returns a function', () => {
    expect(typeof returnFive === 'function').toBe(true);
  });

  it("returns a function that can be invoked thrice", () => {
    let value = returnFive() + returnFive() + returnFive();
    expect(value).toEqual(15);
  });

  it('returns a function that cannot be invoked more than thrice', function() {
    let value = returnFive() + returnFive() + returnFive() + returnFive();

    //We expect value to be NaN because we cannot add undefined to a number.
    expect(isNaN(value)).toEqual(true);
  });

});

