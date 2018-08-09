let dog = {
    name: 'Cody',
    bark,
    loudBark,
}

function bark() {
    return 'ruff ruff!';
}

function loudBark() {
    return bark().toUpperCase();
}

let loud = 'loud';

console.log(bark);