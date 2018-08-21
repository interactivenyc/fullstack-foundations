// const concatString = function(){
// 	let finalString = "";
// 	for(let i = 0; i < arguments.length; i++){
// 		finalString += arguments[i];
// 	}
// 	return finalString;
// };

const concatString = function() {
  return Array.from(arguments).join('');
};

const yourFunctionRunner = function() {
  let finalString = '';
  for (let i = 0; i < arguments.length; i++) {
    finalString += arguments[i]();
  }
  return finalString;
};

// const yourFunctionRunner = function(fnToRun, secondFnToRun) {
//   let finalString = '';

//   for (let i = 0; i < arguments.length; i++) {
//     let fnToRun = arguments[i];
//     finalString += fnToRun();
//   }
//   return finalString;
// };

const makeAdder = numberToRemember => {
  return function(numberToAdd) {
    return numberToAdd + numberToRemember;
  };
};

const once = fnToRunOnce => {
  let hasRan = false;
  return () => {
    if (hasRan === false) {
      fnToRunOnce();
      hasRan = true;
    }
  };
};

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
