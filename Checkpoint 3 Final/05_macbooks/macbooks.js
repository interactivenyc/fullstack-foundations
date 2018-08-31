class Laptop {
    constructor(year, hd) {        
        this.year = year;
        this.hd = hd;
    }

    checkSpecs() {
        return `Year: ${this.year}, HD: ${this.hd}`;
    }
}

class Macbook extends Laptop{
    constructor(year, hd, color) {
        super(year, hd);
        this.color = color;
    }
}

function extendWithObjectCreate(child, parent) {
    let laptop = Object.create(parent.prototype);
    let macbook = Object.create(child.prototype);
    child.prototype = parent.prototype;
    
    console.log('macbook with create', macbook);
    
    return macbook;
}

function extendWithNewKeyword(child, parent) {
    let laptop = new parent(2010, 500);
    let macbook = new child(2012, 1000, 'white');
    child.prototype = parent.prototype;

    console.log('macbook with new', macbook);

    return macbook;
}