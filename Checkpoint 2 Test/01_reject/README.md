### Reject Function

#### 5 Points

Create the function `reject` that takes two arguments:

- arr: takes an array as its first argument

- func: takes a function as its second argument

The 'reject' function returns the values in the array that return "false" after the function (second argument) is called on each element of the Array.  Notice in the example below, all the 'odd' values in the initial array are returned since the expression in the function returns false for odd numbers.

Example:

```
const reject = function(arr, func){...}; // pseudocode for the reject function
const getOdds = (num) => { return num % 2 == 0; }
const odds = reject([1,2,3,4,5,6], getOdds);
// odds = [1,3,5]
```
