describe('newObj function', () => {
  let LittleMouse;
  let value;

  beforeEach(() => {
    LittleMouse = function() {
      this.sound = 'Squeak!';
    };

    LittleMouse.prototype.color = 'White';

    // newObj is passed a constructor function
    value = newObj(LittleMouse);
  });

  it('returns an empty object', () => {
    expect(Object.keys(value).length).toEqual(0);
  });

  it('the internal prototype (__proto__) of the empty object (the value object) is LittleMouse.prototype object', () => {
    expect(Object.getPrototypeOf(value)).toEqual(LittleMouse.prototype);
    // Documentation for Object.getPrototypeOf(): https://mzl.la/2b3ohlm .
  });

  it('calls Object.create', () => {
    spyOn(Object, 'create').and.callThrough();

    newObj(LittleMouse);

    expect(Object.create).toHaveBeenCalled();
  });
});
