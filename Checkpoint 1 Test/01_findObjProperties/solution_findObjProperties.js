function findObjPropsHasOwn(obj) {
    const args = Object.keys(obj);
    const hasProperty = [];

    for (let i=0; i<args.length; i++) {
        if (obj.hasOwnProperty(args[i])) {
            hasProperty.push(args[i]);
        }
    }
    return hasProperty.join(', ');
}

function Rectangle(color, height, width){    
    this.color = color;
    this.height = height;
    this.width = width;
}

function findObjKeys(obj) {
    let keys = Object.keys(obj);
    return keys.join(', ');
}