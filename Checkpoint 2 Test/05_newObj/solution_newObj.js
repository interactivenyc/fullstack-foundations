function newObj(func) {

    let obj = Object.create(Object.getPrototypeOf(new func()));
    let obj2 = Object.create(Object.getPrototypeOf(obj))

    
    console.log('obj', obj);
    console.log('keys', Object.keys(obj));
    console.log('obj2', obj2);
    console.log('keys', Object.keys(obj2));

    //debugger;
    return obj2;
}
