function Rectangle(color, height, width) {
    this.color = color;
    this.width = width;
    this.height = height;
}

Rectangle.prototype.getArea = function() {
    return this.width * this.height;
}