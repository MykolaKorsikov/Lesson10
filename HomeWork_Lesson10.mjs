//Introduce strict rule for one of the parameters in the class


class BaseShape {
    constructor(colorName = 'black') {
        this.colorName = colorName
    }
    print () {
        console.log('Not implemented in Base class')
    }
}
// класс Circle расширяет (наследует) класс BaseShape
class Circle extends BaseShape {
    constructor(colorName = 'black', x0 = 0, y0 = 0, r = 1) {
        super(colorName)
        this.x0 = x0
        this.y0 = y0
        this.r = r
    }
    print () {
        console.log(`Circle {x0 = ${this.x0}, y0 = ${this.y0}, r = ${this.r}}`)
    }
}

class Rectangle extends BaseShape {
    constructor(colorName = 'black', x0 = 0, y0 = 0, width = 1, height = 1) {
        super(colorName)
        this.x0 = x0
        this.y0 = y0
        this.width = width
        this.height = height
    }
    print () {
        console.log(`Rectangle {x0 = ${this.x0}, y0 = ${this.y0}, width = ${this.width}, height = ${this.height}}`)
    }
}

class Heart extends BaseShape {
    constructor(colorName = 'red', broken = true, size = 'medium') {
        super(colorName);
        this.broken = broken;
        this.size = size;
    }
    print () {
        console.log(`Heart {broken = ${this.broken}, size = ${this.size}}`)
    }
}

class Cone extends BaseShape {
    constructor(colorName = 'yellow', icecream= false, radius = 5, height = 20 ) {
        super(colorName);
        this.icecream = icecream;
        this.radius = radius;
        this.height = height;
    }
    print () {
        console.log(`Cone {icecream = ${this.icecream}, radius = ${this.radius}, height = ${this.height}}`)
    }
}


function demo () {
    [new Circle(), new Rectangle(), new Heart(), new Cone()].forEach(shape => shape.print())
}

export {Circle, Rectangle, Heart, Cone} // экспорт нескольких составляющих модуля
export default demo // экспорт одной, самой главной составляющей модуля
