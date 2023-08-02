const rectangle = {
    name : 'Rectangle 1',
    width: 10,
    height: 10,
    area : function () {
        return this.width * this.height;
    }
};

console.log(rectangle.area());