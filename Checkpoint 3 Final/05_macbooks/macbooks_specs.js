describe('Laptop class', () => {
  let omrisLaptop;

  beforeEach(() => {
    omrisLaptop = new Laptop(2005, 500);
  });

  it('is a Constructor Function', () => {
    expect(typeof Laptop).toBe('function');
  });

  it('should take a year and size as parameters', () => {
    expect(omrisLaptop.year).toBe(2005);
    expect(omrisLaptop.hd).toBe(500);
  });

  it('should have a `checkSpecs` function on its prototype', () => {
    expect(omrisLaptop.checkSpecs()).toBe('Year: 2005, HD: 500');
    expect(omrisLaptop.hasOwnProperty('checkSpecs')).toEqual(false);
  });
});

describe('Macbook class', () => {
  let zekesMacbook;

  beforeEach(() => {
    spyOn(Laptop, 'apply').and.callThrough();
    zekesMacbook = new Macbook(2010, 1000, 'gold');
  });

  it('is a Constructor Function', () => {
    expect(typeof Macbook).toBe('function');
  });

  it('should have the year, hd-size, and color', () => {
    expect(zekesMacbook.year).toBe(2010);
    expect(zekesMacbook.hd).toBe(1000);
    expect(zekesMacbook.color).toBe('gold');
  });  
});

describe('extendWithObjectCreate', () => {
  beforeEach(() => {
    spyOn(Object, 'create').and.callThrough();

    // extendWithObjectCreate invocation, the arguments passed are the constructor functions
    // created earlier in these specs.

    extendWithObjectCreate(Macbook, Laptop);
  });

  it('assigns the internal prototype (__proto__) of the first parameter\'s ".prototype" property to reference the second parameter\'s ".prototype" property', () => {
    expect(typeof Macbook).toBe('function');
    expect(typeof Laptop).toBe('function');

    // feel free to check out the docs on `Object.getPrototypeOf`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf
    expect(Object.getPrototypeOf(Macbook.prototype)).toEqual(Laptop.prototype);
  });

  it("calls `Object.create` to create a new object and sets the new object's internal prototype (__proto__)", () => {
    expect(Object.create).toHaveBeenCalled();
  });

  it('can invoke the `checkSpecs` function from the `Laptop.prototype` object', () => {
    const myMacbook = new Macbook(2200, 2000);
    expect(myMacbook.checkSpecs()).toBe('Year: 2200, HD: 2000');
    expect(myMacbook.hasOwnProperty('checkSpecs')).toBe(false);
  });

  it("does not run the parent's constructor function during extension", () => {
    // Parent represents a constructor function
    const Parent = jasmine.createSpy();
    const Child = function() {};
    extendWithObjectCreate(Child, Parent);
    expect(Parent).not.toHaveBeenCalled();
  });
});

// EXTRA CREDIT - 2 Points

describe('extendWithNewKeyword', () => {
  beforeEach(() => {
    spyOn(Object, 'create').and.callThrough();
    // extendWithNewKeyword invocation, notice the arguments being passed
    extendWithNewKeyword(Macbook, Laptop);
  });

  it('assigns the internal prototype of the first parameter\'s ".prototype" property to reference the second parameter\'s ".prototype" property', () => {
    expect(typeof Macbook).toBe('function');
    expect(typeof Laptop).toBe('function');

    expect(Object.getPrototypeOf(Macbook.prototype)).toEqual(Laptop.prototype);
  });

  it("does not use `Object.create` to create a new object and set the new object's internal prototype", () => {
    // instead of `Object.create`
    expect(Object.create).not.toHaveBeenCalled();
  });

  it('can invoke the `checkSpecs` function from the `Laptop.prototype` object', () => {
    const myMacbook = new Macbook(2050, 300);
    expect(myMacbook.checkSpecs()).toBe('Year: 2050, HD: 300');
    expect(myMacbook.hasOwnProperty('checkSpecs')).toBe(false);
  });

  it("runs the parent's constructor function during extension", () => {
    // Parent represents a Constructor Function
    const Parent = jasmine.createSpy();
    const Child = function() {};
    extendWithNewKeyword(Child, Parent);
    expect(Parent).toHaveBeenCalled();
  });
});
