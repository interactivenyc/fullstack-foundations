/*
  In this exercise create a function that can
  create and return a calculator object
  that performs basic mathematic operations.

  We'll be using a pattern called the factory pattern where
  our function, `createCalculator` creates an object tailored
  to our needs.
*/

describe('createCalculator', () => {
  let calculator;

  /*
    Below we're calling the `createCalculator` function, it returns
    a value we are naming calculator. The tests below give us hints about
    what functionality 'calculator' should have.

    This will happen before each `it` block of tests,
    which means each set of tests will start with value assigned to the calculator variable.
  */
  beforeEach(() => {
    spyOn(Object, 'create').and.callThrough();
    calculator = createCalculator();
  });

  it('does not use Object.create to create an instance', () => {
    expect(Object.create.calls.any()).toBe(false);
  });

  it('initially has a value of 0', () => {
    /*
      This line tells us a lot!
      First, it tells us that `calculator` must be an object that has a property called value
      Second, this tells us that its property `value` is a function, and should return the
      outcome of the calculations. When a property is a function, it is called a "method"
      hmm.. I guess we'll need to store those outcomes somewhere..
    */
    expect(calculator.value()).toEqual(0);
  });

  it('can add a number', () => {
    calculator.add(2);
    expect(calculator.value()).toEqual(2);
  });

  it('can add two numbers', () => {
    calculator.add(2);
    calculator.add(3);
    expect(calculator.value()).toEqual(5);
  });

  it('can add many numbers', () => {
    calculator.add(2);
    calculator.add(3);
    calculator.add(4);
    expect(calculator.value()).toEqual(9);
  });

  it('can subtract a number', () => {
    calculator.subtract(2);
    expect(calculator.value()).toEqual(-2);
  });

  it('can add and subtract numbers', () => {
    calculator.add(3);
    calculator.subtract(2);
    expect(calculator.value()).toEqual(1);
  });

  it('can clear its value', () => {
    calculator.add(5);
    calculator.add(10);
    calculator.subtract(7);
    calculator.clear();
    expect(calculator.value()).toEqual(0);
  });

  it('all methods are attached to the instance', () => {
    expect(calculator.hasOwnProperty('add')).toBe(true);
    expect(calculator.hasOwnProperty('subtract')).toBe(true);
    expect(calculator.hasOwnProperty('value')).toBe(true);
    expect(calculator.hasOwnProperty('clear')).toBe(true);
  });

  describe('updateExistingInstances', () => {
    const arrayOfCalculatorInstances = [];
    let updatedInstances;

    /* 
      In the beforeEach function, 1000 calculator instances are created
      and pushed into the arrayOfCalculaotrInstances array. 
    */
    beforeEach(() => {
      for (let i = 0; i < 1000; i++) {
        arrayOfCalculatorInstances.push(createCalculator());
      }
    });

    it('update existing instances, adds a square method to every instance', () => {
      updatedInstances = addSquareMethod(arrayOfCalculatorInstances);
      expect(
        /* 
          The [Array.prototype.every](https://goo.gl/2gUavP) method iterates (loops) over the updatedInstances array
          and checks that each calculator instance has a "square" method 
        */
        updatedInstances.every(instance => {
          return instance.square;
        })
      ).toBe(true);
    });

    it('the square methods squares the current total', () => {
      updatedInstances[0].add(5);
      expect(updatedInstances[0].square()).toBe(25);
    });
  });
});

// OFF BY 10 Calculator

describe('createHumanCalculator', () => {
  let humanCalculator;

  beforeEach(() => {
    spyOn(Object, 'create').and.callThrough();
    humanCalculator = createHumanCalculator();
  });

  it('creates an instance using Object.create', () => {
    expect(Object.create).toHaveBeenCalled();
  });

  it('initially has a value of -10', () => {
    expect(humanCalculator.value()).toEqual(-10);
  });

  it('can add a number', () => {
    humanCalculator.add(2);
    expect(humanCalculator.value()).toEqual(-8);
  });

  it('can add two numbers', () => {
    humanCalculator.add(2);
    humanCalculator.add(3);
    expect(humanCalculator.value()).toEqual(-5);
  });

  it('can add many numbers', () => {
    humanCalculator.add(2);
    humanCalculator.add(3);
    humanCalculator.add(4);
    expect(humanCalculator.value()).toEqual(-1);
  });

  it('can subtract a number', () => {
    humanCalculator.subtract(2);
    expect(humanCalculator.value()).toEqual(-12);
  });

  it('can add and subtract numbers', () => {
    humanCalculator.add(3);
    humanCalculator.subtract(2);
    expect(humanCalculator.value()).toEqual(-9);
  });

  it('can clear its value', () => {
    humanCalculator.add(5);
    humanCalculator.add(10);
    humanCalculator.subtract(7);
    humanCalculator.clear();
    expect(humanCalculator.value()).toEqual(-10);
  });

  it('all the methods are not on the "instance" (humanCalculator), rather, they are accessed via the prototype chain', () => {
    expect(humanCalculator.hasOwnProperty('add')).toBe(false);
    expect(humanCalculator.hasOwnProperty('subtract')).toBe(false);
    expect(humanCalculator.hasOwnProperty('value')).toBe(false);
    expect(humanCalculator.hasOwnProperty('clear')).toBe(false);
  });
});
