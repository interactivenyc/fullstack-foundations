function reject(array, func){
    let result = [];

    console.log('reject', array, func);
    
    result = array.filter(arrayItem => !func(arrayItem));

    console.log('result', result);
    
    return result;
}