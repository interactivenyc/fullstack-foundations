/* 
  DO NOT refactor the function declaration to a function expression using
  `const` or `let`, the test specs won't be able to test the function properly.
*/

function recSmallestInt(arr) {
  // write code here
  if(arr.length === 1) {
    return arr.shift();
  } else {
    return Math.min(arr.shift(), recSmallestInt(arr.slice(1)))
  }
}

/*
 if you wanted to write a recursive function, you can use expression such as:
 
 const recSmallestInt = arr => {
   if(arr.length === 1) {
    return arr.shift();
  } else {
    return Math.min(arr.shift(), recSmallestInt(arr.slice(1)))
  }
 }
 
 this is perfectly acceptable. The reason you can't write it with this syntax is 
 it causes the last spec to fail since variables declared with `const` and `let`
 are not placed on the global window object.
 
 */