// the difference function is pre-declared so it is recognized by the test specs.
// The last spec in symmetricDiff checks to see that difference is called.
// if difference was defined using an expression assignment using 
// let or const, it is not accessible on the "window" object
// the test specs spy is using. Feel free to change the names of the
// paramaters, but if you want your specs to pass keep the function
// declaration syntax.
function difference(array, arrayTwo) {
    let outArray = array.filter(item => {
        return arrayTwo.indexOf(item) === -1;
    });

    return outArray;
}

function symmetricDiff(array, arrayTwo) {
    let outArray = difference(array, arrayTwo).concat(difference(arrayTwo, array));

    return outArray;
}