function threeTimes(func) {
    let times = 0;

    const limitedFunc = () => {
        times ++;
        if (times <=3) {
            return func();
        }
    }

    return limitedFunc;
}