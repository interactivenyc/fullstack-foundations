function CalculatorProto() {
    this.total = 0;
    this.value = () => {
        return this.total;
    };

    this.add = (num) => {
        this.total += num;
    };

    this.subtract = (num) => {
        this.total -= num;
    };

    this.clear = () => {
        this.total = 0;
    };
}

const humanCalculator = {
    total: -10,
    value() {
        return this.total;
    },

    add(num) {
        this.total += num;
    },

    subtract(num) {
        this.total -= num;
    },

    clear() {
        this.total = -10;
    }
}

function addSquareMethod(calcArray) {
    for (let i=0; i<calcArray.length; i++) {
        calcArray[i].square = () => {
            return calcArray[i].value() * calcArray[i].value();
        }
    }
    return calcArray;
}

function createCalculator() {
    let calculator = new CalculatorProto();
    return calculator;
}

function createHumanCalculator() {
    let calculator = Object.create(humanCalculator);
    return calculator;
}

