function RPNCalculator() {
    this.stack = [];
    this.total = 0;
}

RPNCalculator.prototype.value = function() {
    return this.total;
};

RPNCalculator.prototype.push = function(num) {
    this.stack.push(num);
    return this.stack.toString();
};

RPNCalculator.prototype.plus = function() {
    if (this.stack.length != 2) {
        throw 'rpnCalculatorInstance is empty';
    };
    this.total = this.stack[0] + this.stack[1];
    this.stack = [this.total];
    return this.value();
};

RPNCalculator.prototype.minus = function() {
    if (this.stack.length != 2) {
        throw 'rpnCalculatorInstance is empty';
    };
    this.total = this.stack[0] - this.stack[1];
    this.stack = [this.total];
    return this.value();
};

RPNCalculator.prototype.times = function() {
    if (this.stack.length != 2) {
        throw 'rpnCalculatorInstance is empty';
    };
    this.total = this.stack[0] * this.stack[1];
    this.stack = [this.total];
    return this.value();
};

RPNCalculator.prototype.divide = function() {
    if (this.stack.length != 2) {
        throw 'rpnCalculatorInstance is empty';
    };
    this.total = this.stack[0] / this.stack[1];
    this.stack = [this.total];
    return this.value();
};

let calculator = new RPNCalculator();
console.log(calculator);
console.log("value", calculator.plus);
// console.log("value()", calculator.value());
// console.log(calculator.push(3));
// console.log(calculator.push(3));
// console.log(calculator.plus());


// console.log(calculator);
// console.log("value", calculator.value);
// console.log("value()", calculator.value());