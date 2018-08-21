describe("Don't Spill The Beans", () => {
  let secret;
  beforeEach(() => {
    secret = dontSpillTheBeans(
      "I'm proposing to my significant other this Friday"
    );
  });

  it('`dontSpillTheBeans` is a function', () => {
    expect(typeof dontSpillTheBeans).toEqual('function');
  });

  it('returns an object', () => {
    expect(typeof secret).toEqual('object');
  });

  it('the object returned has `getSecret` and `setSecret` properties', () => {
    // Not sure what Object.keys is? Check the documentation - https://mzl.la/2bj8226
    const properties = Object.keys(secret);

    // checks for values in the array Object.keys returns, these are the property names on "secret" object.
    expect(
      properties.indexOf('getSecret') >= 0 &&
        properties.indexOf('setSecret') >= 0
    ).toEqual(true);
    expect(properties.length === 2).toEqual(true);
  });

  it('`getSecret` and `setSecret` are functions', () => {
    expect(typeof secret.getSecret).toEqual('function');
  });

  it('`getSecret` returns `secret` value that was passed to the dontSpillTheBeans function', () => {
    expect(secret.getSecret()).toEqual(
      "I'm proposing to my significant other this Friday"
    );
    secret.setSecret("It's a surprise, don't say anything");
    expect(secret.getSecret()).toEqual("It's a surprise, don't say anything");
  });

  it('`setSecret` re-assigns the secret value to a new value', () => {
    const surpriseForMom = dontSpillTheBeans(
      "I'm throwing a surprise 60th Birthday Party for my Mom in two months!"
    );
    surpriseForMom.setSecret(
      "I'm taking my mother on vacation for her 60th Birthday!"
    );

    expect(surpriseForMom.getSecret()).toEqual(
      "I'm taking my mother on vacation for her 60th Birthday!"
    );
    surpriseForMom.setSecret("We're going to THAILAND!!!");
    expect(surpriseForMom.getSecret()).toEqual("We're going to THAILAND!!!");
    expect(Object.keys(surpriseForMom).length).toEqual(2);
  });
});
