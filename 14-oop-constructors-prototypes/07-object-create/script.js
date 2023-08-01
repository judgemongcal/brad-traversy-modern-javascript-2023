const rectanglePrototypes = {
    area: function () {
        return this.width * this.height
    },
    perimeter: function () {
        return 2 * (this.width + this.height);
    },
    isSquare : function () {
        return this.width === this.height;
    }
};

function createRectangle(height, width) {
    return Object.create(rectanglePrototypes, {
        height: {
            value: height
        },
        width: {
            value: width
        },
    })
};

const rect = createRectangle(10, 10);
console.log(rect);
console.log(rect.area(), rect.isSquare());