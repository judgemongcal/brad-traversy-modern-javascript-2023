
// Parent Class
class Shape {
    constructor (name){
        this.name = name;
    };

    logName() {
        console.log('Shape Name : ' + this.name);
    }

    getCircArea() {
        console.log(Math.PI * (this.radius * this.radius));
    }
};


// Sub Class
class Rectangle extends Shape {
    constructor (name, width, height) {
        super(name);
        
        this.height = height;
        this.width = width;
    };
};

class Circle extends Shape {
    constructor (name, radius){
        super(name);

        this.radius = radius;
    }

    logName() {
        console.log('Circle Name : ' + this.name);
    }
}

const rect = new Rectangle('Rect 1', 20, 20);
const circ = new Circle('Circle 1', 5);
console.log(rect);
console.log(circ);
rect.logName();
circ.logName();
circ.getCircArea();

console.log(rect instanceof Rectangle && rect instanceof Shape);