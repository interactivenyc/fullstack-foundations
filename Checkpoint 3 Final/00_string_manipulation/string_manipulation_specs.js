describe('vowelsCount', () => {
  it('should handle an empty String', () => {
    expect(vowelsCount('')).toBe(0);
  });
  it('should handle a String with no Vowels', () => {
    expect(vowelsCount('http://')).toBe(0);
  });

  it('should handle a String with Vowels', () => {
    expect(vowelsCount('Hello')).toBe(2);
  });

  it('should handle a String with multiple words and Vowels', () => {
    expect(vowelsCount('Hello World!')).toBe(3);
  });

  it('should handle a String with all vowels', () => {
    expect(vowelsCount('AeIoU')).toBe(5);
  });

  it('should call Array.prototype.reduce', () => {
    spyOn(Array.prototype, 'reduce').and.callThrough();
    vowelsCount('Hello World');
    expect(Array.prototype.reduce.calls.count() > 0).toBe(true);
  });
});
