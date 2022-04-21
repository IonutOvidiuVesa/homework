/* Q1. Create a shape class with name, sides properties with a constructor to assign the values to them.
Add a method getShape to get the shape info.
Create a child class circle/rectangle from the shape class, the child class should contain new properties, a new method to calculate the area. 
Set properties of the parent class from the child constructor. */

class Shape {
    constructor(name, sides){
        this._name = name;
        this._sides = sides;
    }

    get Name(){
        return this._name;
    }

    get Sides(){
        return this._sides;
    }

}

class Rectangle extends Shape {
    constructor(name, sides, width, length){
        super(name, sides);
        this._width = width;
        this._length = length;
    }

    get Width(){
        return this._width;
    }

    get Length(){
        return this._length;
    }

    getArea() {
        return this.Length * this.Width;  
    }
}

class Circle extends Shape {
    constructor(name, sides, radius){
        super(name, sides);
        this._radius = radius;
    }

    get Radius(){
        return this._radius;
    }

    getArea() {
        return 3.14 * (this.Radius)^2;  
    }
}

const newShapeGenerator  = new Shape('Star', 7);
const circleItem = new Circle('Circle', 0, 2);
const rectangleItem = new Rectangle('Rectangle', 4, 7, 4);
//creating a shape from the parent class Shape using the constructor built-in

document.getElementById("newShapeGenerator").innerHTML = 'Succesfully created a ' + newShapeGenerator.Name + ' with a number of ' + newShapeGenerator.Sides + ' sides';

document.getElementById("newCircle").innerHTML = 'Succesfully created a ' + circleItem.Name + ' with a number of ' + circleItem.Sides + ' sides';

document.getElementById("circleRadius").innerHTML = 'The ' + circleItem.Name + ' area is ' + circleItem.getArea();

document.getElementById("newRectangle").innerHTML = 'Succesfully created a ' + rectangleItem.Name + ' with a number of ' + rectangleItem.Sides + ' sides';

document.getElementById("rectangleArea").innerHTML = 'The ' + rectangleItem.Name + ' area is ' + rectangleItem.getArea();
