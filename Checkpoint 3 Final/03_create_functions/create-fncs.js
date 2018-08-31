function createFunctions(num) {
    var funcArray = [];

    for (var i = 0; i < num; i++) {
        addFunction(i);
    }

    function addFunction(index) {
        funcArray.push(function() {
            return index;
        })
    }

    return funcArray;
}