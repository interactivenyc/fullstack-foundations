/* 
  DO NOT refactor the function declaration to a function expression using
  `const` or `let`, the test specs won't be able to test the function properly.
  
*/

function recSmallestInt(arr) {

  if (arr.length === 1) {    
    return arr.pop();
  }

  if (arr[0] < arr[arr.length -1]) {    
    arr.pop();
  } else {
    arr.shift();
  }

  return recSmallestInt(arr);
}


