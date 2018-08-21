### Run Num Times

#### 2 Points

Create the function "runNumTimes" that accepts two arguments:

- func: takes a function as its first argument
- num: takes a number as its second argument

runNumTimes should execute the "func" argument "num" times.

Example:

```
let total = 0;

const func = () => {
  total += 5
  return total;
  
};

runNumTimes(func, 5);
// total === 25
```
