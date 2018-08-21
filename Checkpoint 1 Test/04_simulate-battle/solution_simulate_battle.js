function Pokemon(name, health, attackBonus) {
    this.name = name;
    this.health = health;
    this.attackBonus = attackBonus;
}

Pokemon.prototype.biteAttack = function() {    
    return this.attackBonus + 2;
}

Pokemon.prototype.isDefeated = function() {
    if (this.health >= 1) return false;
    return true;
}

function simulateBattle(pokemon1, pokemon2){
    while (pokemon1.health > 0 && pokemon2.health > 0) {
        pokemon1.health -= pokemon2.biteAttack();
        pokemon2.health -= pokemon1.biteAttack();
    }    

    if (pokemon1.health <= 0) {        
        return `${pokemon2.name} Wins!`;
    } else {
        return `${pokemon1.name} Wins!`
    }

}

