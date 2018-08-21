function dontSpillTheBeans(secret) {
    this.secret = secret;

    return { secret };
}

dontSpillTheBeans.prototype.getSecret = function() {
    return { secret };
}

dontSpillTheBeans.prototype.setSecret = function(secret) {
    this.secret = secret;
    return { secret };
}

/* 
    I'm not sure why this isn't working. 
    I remember doing an exercise where this worked...
    I used this as a reference:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype
*/

let newSecret = dontSpillTheBeans("I'm proposing.");

let properties = Object.keys(newSecret);
console.log("properties", properties);
console.log("newSecret", newSecret);

console.log("getSecret", newSecret.getSecret);
console.log("setSecret", newSecret.setSecret);
