/* eslint-disable no-undef */
describe('accessor', () => {
  it('takes an object and returns a function', () => {
    const result = accessor({});
    expect(typeof result).toBe('function');
  });

  it('the returned function can get properties of the given object', () => {
    let accessExample = accessor({ a: 100 });
    expect(accessExample('a')).toEqual(100);

    accessExample = accessor({ foobar: [7, 8, 9] });
    expect(accessExample('foobar')).toEqual([7, 8, 9]);
    expect(accessExample('a')).toEqual(undefined);
  });

  it('the returned function can set properties of the given object', () => {
    const obj = { stuff: 'something' };
    const accessExample = accessor(obj);

    accessExample('stuff', 'a new value');
    expect(obj.stuff).toEqual('a new value');

    expect(obj['pizz-pie']).toEqual(undefined);
    //              key       value
    accessExample('pizza-pie', 'yummmm');
    expect(obj['pizza-pie']).toEqual('yummmm');
  });
});
