function rotater(string) {
    let reverse = false;
    let result;

    function rotate(index) {
        console.log('rotate', index, string);
        
        if (index === string.length) {
            reverse = !reverse;
        }

        if (!reverse){
            result = string.slice(index) + string.slice(0, index);
        } else {
            result = string.slice(string.length - index) + string.slice(0, string.length - index);
        }
        return result;
    }

    return rotate;
}

// let rotate = rotater('thisString');

// console.log('rotater', rotate);


// console.log(rotate(4));
// console.log(rotate(40));

// console.log(rotate(6));
