function callAll(obj, array) {
    let outArray = [];
    array.forEach(element => {
        outArray.push(element.call(obj));
    });
    return outArray;
}