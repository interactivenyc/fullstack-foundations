// YOUR CODE BELOW

function puppyFactory(name, breed) {
  const newPuppy = Object.create(puppy);
  newPuppy.name = name;
  newPuppy.breed = breed;

  console.log(newPuppy);
  return newPuppy;
}

function puppy() {

  function bark(){
    console.log('Ruff, Ruff');
  }

  function sleep() {
    console.log('zzzZZZZZzzzz');
  }

}

console.log('Testing New Puppy...');
let steve = puppyFactory('steve', 'mutt');
console.log('steve.name:', steve.name);
steve.bark();

  
  describe('puppyFactory refactor', () => {

    it('does not contain `bark` or `sleep` properties directly instances', () => {
      const zach = puppyFactory('zach', 'beagle');
      const instanceProperties = Object.keys(zach);

      expect(instanceProperties.includes('bark')).toBe(false);
      expect(instanceProperties.includes('sleep')).toBe(false);
    });
    
    it('uses Object.create to manipulate the prototype chain', () => {
      spyOn(Object, 'create').and.callThrough();
      
      puppyFactory('lilly', 'boxer');
      
      expect(Object.create).toHaveBeenCalled();
    });
  
    it("the bark and sleep methods are on an instances' internal prototype", () => {
      const lara = puppyFactory('lara', 'yellow-lab');
      
      const internalPrototype = Object.getPrototypeOf(lara);
      const internalPrototypeProps = Object.keys(internalPrototype);
      
      expect(internalPrototypeProps.includes('sleep')).toBe(true);
      expect(internalPrototypeProps.includes('bark')).toBe(true);
    });
    
    
  });
