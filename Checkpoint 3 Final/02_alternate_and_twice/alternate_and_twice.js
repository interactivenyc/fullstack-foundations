
function alternate(fn) {
    let index = -1;
    
    return function() {
        index++;
        if (index % 2 === 0) {
            return fn();
        }
    }
}

function twice(fn) {
    let index = 0;

    return function() {
        index++;
        if (index <= 2) {
            return fn();
        } else {
            return 0;
        }
    }
}