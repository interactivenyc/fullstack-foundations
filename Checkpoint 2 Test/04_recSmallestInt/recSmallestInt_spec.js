describe('recSmallestInt', () => {
  it('Returns the smallest integer', () => {
    let smallest = recSmallestInt([8, 4, 2, 8, 5]);
    expect(smallest).toEqual(2);
  });

  it('Returns the smallest integer, when negative', () => {
    let smallest = recSmallestInt([5, 4, 0, 8, -5]);
    expect(smallest).toEqual(-5);
  });

  it('calls itself recursively', () => {
    /* 
      NOTE: This is a test spec that determines if the recSmallestInt function calls itself recursively 

      In order to make this spec work properly, the function needs to be declared as a function declaration:

        function recSmallestInt() {

        }

      You can't use an expression:

        const recSmallestInt = function() {}
        const recSmallestInt = () => {}

      There isn't anything fundamentally wrong with creating the function with an expression, but the test specs won't
      be able to recognize the function if declared with an expression.

    */

    spyOn(window, 'recSmallestInt').and.callThrough();

    recSmallestInt([8, 4, 0, 8, 5]);

    // checks if `recSmallesInt` is called more than once (if it is recursive, it will be called more than one time)
    expect(recSmallestInt.calls.count()).toBeGreaterThan(1);
  });
});
