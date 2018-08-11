function setPropsOnObj(obj) {
    obj.x = 7;
    obj.y = 8;
    obj.onePlus = num => {
        return num + 1;
    };
    
    return obj;
}

function setPropsOnArr (pArray) {
    pArray.hello = () => {
        return 'Hello!';
    };
    pArray.twoTimes = (num) => {
        return num * 2;
    };
    pArray.full = 'stack';
    pArray[0] = 5;
};

function setPropsOnFunc (func) {
    func.year = '20??';
    func.divideByTwo = (num) => {
        return num/2;
    }
}

function shallowCopy(obj1, obj2) {
    if (obj1.length > 0) {
        console.log('isArray', obj1.concat(obj2));
        return obj1.concat(obj2);
    } else {
        console.log('isObject', {...obj1, ...obj2});
        return {...obj1, ...obj2};
    }
}