function useMapToUpperCase(string) {
    const array = string.split(' ');

    const result = array.map(arrayItem => arrayItem.toUpperCase());

    return result;

}

function useFilter(array) {
    let result = array.filter(string => string.indexOf('@') > -1);
    return result;
}

function sumWithReduce(array, start=0) {    
    const reducer = (start, currentValue) => start + currentValue;
   
    let result = array.reduce(reducer, start);
    
    return result;
}

function double(num) {
    return num * 2;
}

function isEven(num) {
    return num % 2 === 0;
}

function filterEvensDoubleAndSum(array) {
    let accumulator = 0;
    return array.filter(isEven).map(double).reduce((accumulator, currentValue) => accumulator + currentValue);
}

