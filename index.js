class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return `(${this.x}, ${this.y})`;
    }
}

class Side {
  constructor(length) {
    this.length = length
  }
}

class Shape {
    constructor(  ) {

    }
    addToPlane( x, y ){
      return this.position = new Point(x, y)
    }
    move( x, y ){
      return this.position = new Point(x, y)
    }
}

class Circle extends Shape {
  constructor( radius ){
    super( );
    this.radius = radius;
  }
  area(){
    return Math.PI * this.radius ^ 2;
  }
  circumference(){
    return 2 * Math.PI * this.radius;
  }

  diameter(){
    return this.radius * 2
  }
}


class Polygon extends Shape {
  constructor( sides_array ){
    super( )
    this.sides = sides_array
  }
  perimeter(){
    return this.sides.reduce(function(total_perimeter, side){
      return total_perimeter + side.length
    }, 0)
  }
  numberOfSides(){
    return this.sides.length
  }
}

class Quadrilateral extends Polygon {
  constructor( side1, side2, side3, side4 ){
    var side_1 = new Side(side1)
    var side_2 = new Side(side2)
    var side_3 = new Side(side3)
    var side_4 = new Side(side4)
    super( [ side_1, side_2, side_3, side_4 ] )
  }
}

class Rectangle extends Quadrilateral {
  constructor( width, height ) {
    super( width, height, width, height )
    this.width = width
    this.height = height
  }
  area() {
    return this.width * this.height
  }
}

class Square extends Rectangle {
  constructor( length ) {
    super( length, length )
    this.length = length
  }
  listProperties(){
    var sq = this
    for (var prop in sq) {
      if(sq.hasOwnProperty(prop)) {
        console.log("square" + prop + " = " + sq[prop]);
      }
    }
  }
}

class Triangle extends Polygon {
  constructor( side1, side2, side3 ) {
    var side_1 = new Side(side1)
    var side_2 = new Side(side2)
    var side_3 = new Side(side3)
    super( [ side_1, side_2, side_3 ] )
  }
}
