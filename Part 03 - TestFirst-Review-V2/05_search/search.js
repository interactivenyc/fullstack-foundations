// the difference function is pre-declared so it is recognized by the test specs.
// The last spec in symmetricDiff checks to see that difference is called.
// if difference was defined using an expression assignment using 
// let or const, it is not accessible on the "window" object
// the test specs spy is using. Feel free to change the names of the
// paramaters, but if you want your specs to pass keep the function
// declaration syntax.
function search(func) {

    let result = false;

    //this = array, passed in through the call method
    this.forEach(item => {
        if (func(item)){
            result = true;
        } else if (Array.isArray(item) && !result) {
            result = search.call(item, func);
        }
    });
    return result;
}





// search.call([1,2,[3,4,5],6], function(val) {
//     return val === 5;
// });

