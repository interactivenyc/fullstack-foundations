function accessor(obj) {
    function getProp(prop, setProp) {
        if (setProp) {
            obj[prop] = setProp;
        }
        return obj[prop];
    }
    return getProp;
}