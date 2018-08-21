describe('Rectangle constructor', () => {
  let blueRectangle;
  let redRectangle;

  // rectangle is a constructor function
  beforeEach(() => {
    blueRectangle = new Rectangle('blue', 5, 3);
    redRectangle = new Rectangle('red', 4, 7);
  });

  // the rectangle constructor should dynamically set properties
  it('sets the color and height of a rectangle', () => {
    expect(blueRectangle.color).toEqual('blue');
    expect(blueRectangle.height).toEqual(5);
    expect(blueRectangle.width).toEqual(3);
    expect(redRectangle.color).toEqual('red');
    expect(redRectangle.height).toEqual(4);
    expect(redRectangle.width).toEqual(7);
  });

  it('has a function getArea on its prototype that returns the area of a rectangle', () => {
    expect(blueRectangle.hasOwnProperty('getArea')).toEqual(false);
    expect(redRectangle.hasOwnProperty('getArea')).toEqual(false);
    expect(Rectangle.prototype.hasOwnProperty('getArea')).toEqual(true);
    expect(blueRectangle.getArea()).toEqual(15);
    expect(redRectangle.getArea()).toEqual(28);
  });
});
