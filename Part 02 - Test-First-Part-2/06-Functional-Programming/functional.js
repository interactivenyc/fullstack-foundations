function map(array, fn) {
    let newArray = [];

    for (let i=0; i<array.length; i++) {
        newArray.push(fn(array[i]));
    }

    return newArray;
}

function filter(array, fn) {
    let newArray = [];

    for (let i=0; i<array.length; i++) {
        if (fn(array[i])) {
            newArray.push(array[i])
        }
    }
    
    return newArray;
}

function includes(obj, val) {
    console.log('includes', obj, val);
    
    if (Array.isArray(obj)) {
        for (let i=0; i<obj.length; i++) {
            if (obj[i] === val) {
                console.log('true');
                return true;
            }
        }
    } else {
        for (key in obj) {
            if (obj[key] === val) {
                console.log('true');
                return true;
            }
        }
    }
    
    console.log('false');
    return false;
}

function countWords(num, str) {
    let strArray = str.split(" ");
    return num + strArray.length;
}

function reduce(array, startValue, fn) {
    let outValue = startValue;
    array.forEach(index => {
        outValue = fn(outValue, index);
      });
    return outValue;
}

function sum(array) {
    function add(num1, num2) {
       return num1 + num2;
    };
    return reduce(array, 0, add);
}

function every(array, fn) {
    for (let i = 0; i < array.length; i++) {
        if (!fn(array[i])) return false;
    }
    return true;
}

// const every = (array, checkerFunc) => {
//     const everyIterator = (currentVal, nextVal) =>
//       currentVal && checkerFunc(nextVal);
//     return reduce(array, true, everyIterator);
// };

function any(array, fn) {
    for (let i = 0; i < array.length; i++) {
        if (fn(array[i])) return true;
    }
    return false;
}

// const any = (array, checkerFunc) => {
//     const anyIterator = (currentVal, nextVal) =>
//       currentVal || checkerFunc(nextVal);
  
//     return reduce(array, false, anyIterator);
// };

function doubler(num) {
    console.log("doubler", num);
    return num * 2;
}
