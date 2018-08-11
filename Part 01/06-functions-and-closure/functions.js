function concatString() {
   let argArray = Array.from(arguments);
   let outString = argArray.join('');

   return outString;
}

function yourFunctionRunner() {
    let argArray = Array.from(arguments);

    let outString = '';
    for (let i = 0; i < argArray.length; i++) {
        outString += argArray[i]();
    }

    return outString;
}

const makeAdder = numberToRemember => {
    return function(numberToAdd) {
      return numberToAdd + numberToRemember;
    };
  };

function once(func) {
    let called = false;

    return () => {
        if (!called) {
            called = true;
            return func();
        }
    }
}

var createObjectWithClosures = function() {
    let total = 0;
    return {
        oneIncrementer: function() {
        total += 1;
        },
        tensIncrementer: function() {
        total += 10;
        },
        getValue: function() {
        return total;
        },
        setValue: function(val) {
        total = val;
        },
    };
};
