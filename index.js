class Polygon {
    constructor(sides) {
        this.sides = sides;
    }

    get countSides(){
        return this.sides.length;
    }

    get perimeter(){
        return this.sides.reduce(function(memo, value){return memo + value});
    }
}

class Triangle extends Polygon {
    get isValid(){
        return this.sides[0] + this.sides[1] > this.sides[2] && this.sides[1] + this.sides[2] > this.sides[0] && this.sides[0] + this.sides[2] > this.sides[1];
    }
}

class Square extends Polygon {
    get isValid() {
        return this.sides.every(side => side === this.sides[0]);
    }

    get area() {
        return this.sides[0] * this.sides[0];
    }
}