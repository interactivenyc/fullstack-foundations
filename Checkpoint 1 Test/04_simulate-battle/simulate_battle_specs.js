describe('Pokemon class', () => {
  let pikachu;

  beforeEach(() => {
    pikachu = new Pokemon('Pikachu', 250, 4);
  });

  it('should have a name property', () => {
    expect(pikachu.name).toEqual('Pikachu');
  });

  it('should have a health and attackBonus property', () => {
    expect(pikachu.health).toEqual(250);
    expect(pikachu.attackBonus).toEqual(4);
  });

  describe("methods and properties are on the Pokemon Constructor Functions `.prototype` object'", () => {
    it('should have a biteAttack and isDefeated function on its .prototpye', () => {
      expect(typeof pikachu.biteAttack === 'function').toEqual(true);
      expect(pikachu.hasOwnProperty('biteAttack')).toEqual(false);
      expect(Pokemon.prototype.hasOwnProperty('biteAttack')).toEqual(true);

      expect(typeof pikachu.isDefeated).toEqual('function');
      expect(pikachu.hasOwnProperty('isDefeated')).toEqual(false);
      expect(Pokemon.prototype.hasOwnProperty('isDefeated')).toEqual(true);
    });

    it('the `biteAttack` method should return the sum of the `attackBonus` property + 2', () => {
      expect(pikachu.biteAttack()).toEqual(6);
    });

    it('the `isDefeated` method returns `false` if the health property is >= 1', () => {
      expect(pikachu.isDefeated()).toEqual(false);
    });

    it('the `isDefeated` method returns `true` if the health property is <= 0', () => {
      pikachu.health = pikachu.health - 250;
      expect(pikachu.isDefeated()).toEqual(true);
    });
  });
});

// NOTE: REVIEW THE READM.md File in 04-simulte-battle
// this will add additional context to the simulate battle function
describe('simulateBattle function', () => {
  let pikachu;
  let charizard;

  beforeEach(function() {
    pikachu = new Pokemon('Pikachu', 250, 4);
    charizard = new Pokemon('Charizard', 300, 5);
  });

  it('returns a string', () => {
    expect(typeof simulateBattle(pikachu, charizard, 'Pikachu')).toEqual(
      'string'
    );
  });

  it('returns the winner (the pokemon that has health remaining)', () => {
    expect(simulateBattle(pikachu, charizard, 'Pikachu')).toEqual(
      'Charizard Wins!'
    );
  });

  it('works on multiple instances', () => {
    let krabby = new Pokemon('Krabby', 400, 5);
    let squirtle = new Pokemon('Squirtle', 600, 2);

    expect(simulateBattle(krabby, squirtle, 'Krabby')).toEqual('Krabby Wins!');
  });
});
