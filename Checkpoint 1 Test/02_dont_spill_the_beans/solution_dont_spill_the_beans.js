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

// let newSecret = dontSpillTheBeans("I'm proposing.");

// let properties = Object.keys(newSecret);
// console.log("properties", properties);
// console.log("newSecret", newSecret);

// console.log("getSecret", newSecret.getSecret);
// console.log("setSecret", newSecret.setSecret);
