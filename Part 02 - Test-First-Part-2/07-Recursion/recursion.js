function factorialIterative(num) {
    let total = 1;
    
    for (let i = 1; i <= num; i++) {
        total *= i;        
    }
    return total;
}

function factorial(num) {
    if (num === 0){
        return 1;
    } else {
        return num * factorial(num -1);
    }
}

function fib(num) {
    if (num === 0 || num === 1)  {
        return 1;
    } else {
        return fib(num-1) + fib(num-2);
    }
}

function type(obj) {
    let typeString = Object.prototype.toString.call(obj).slice(8, -1);
    //console.log('type', typeString);    
    return typeString;
}

function stringify(obj) {
    if (type(obj) === 'String') {
      return `"${obj}"`;
    }
    if (type(obj) === 'Array') {
      const result = obj.map(o => stringify(o));
      return `[${result.join(',')}]`;
    }
    if (type(obj) === 'Object') {
      let result = [];
      Object.keys(obj).forEach(key => {
        let val = stringify(obj[key]);
        result.push(`"${key}": ${val}`);
      });
      return `{${result.join(',')}}`;
    }
  
    return obj + '';
  };