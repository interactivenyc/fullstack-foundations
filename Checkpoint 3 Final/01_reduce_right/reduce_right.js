// reduceRight

















/* 
  DO NOT refactor the function declaration to a function expression using
  `const` or `let`, the test specs won't be able to test the function properly.

  don't forget to define parameters...
*/
function reduceRightRecursive(array, start, fn) {
  let arrayCopy = array.slice();
  if (arrayCopy[arrayCopy.length - 1]) {
    start = fn(start, arrayCopy[arrayCopy.length - 1]);
    return reduceRightRecursive(arrayCopy.splice(0, arrayCopy.length - 1), start, fn);
  } else {
    return start;
  }
}

function reduceRight(array, start, fn) {
  let copyArray = array.slice().reverse();

  copyArray.forEach(element => {
    start = fn(start, element);
  });
    
  return start;
}

// const stringConcat = function(prev, curr) {
//   return prev + curr;
// };
// const reducedResult = reduceRightRecursive(
//   ['o', 'l', 'l', 'e', 'h'],
//   '',
//   stringConcat
// );
// console.log('reducedResult', reducedResult);

