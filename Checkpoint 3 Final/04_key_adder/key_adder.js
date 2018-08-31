function keyAdder() {    
    let keys = Object.keys(this);
    let val = 0;

    for (let i = 0; i < keys.length; i++) {
        if (this.hasOwnProperty(keys[i])) {            
            if (typeof(this[keys[i]]) === 'number') {
                val += this[keys[i]];
            }
        }
    }
    return val;
}