////1verasat chand sathi
// function Circle(radius){
//     this.radius = radius ;
//     this.draw = function(){
//         console.log("draw")
//     }
// }
// const circle = new Circle(10);
// const circle2 = new Circle(20);
////2property description
// let person = {name : "saman"};
// console.log(person);
// let objectBase = Object.getPrototypeOf(person);
// let descriptor = Object.getOwnPropertyDescriptor(objectBase,"toString");
// console.log(descriptor);
// Object.defineProperty(person,"name",{
//     writable : true ,
//     configurable :false ,
//     enumerable : true
// });
// console.log(Object.keys(person));
////3constructor prototype
// function Circle(radius){
//     this.radius = radius
// }
// const circle = new Circle(1);
// Circle.prototype
////4prototype vs instance members
//INSTANCE  members (dar function hastand)
// function Circle(radius) {
//   this.radius = radius;
//   this.move = function () {
//     //this.draw;
//     console.log("move");
//   };
// }
// //prototype members (biron function asli hastand)
// Circle.prototype.draw = function () {
//   console.log("draw");
//   //this.move ==> seda mitonim bezanim instance members dar prototype members
// }; // با اینکار این فانکشن به پروتوتایپ منتقل میشود
// Circle.prototype.toString = function () {
//   return "circle with radius " + this.radius;
// };
// const c1 = new Circle(1);
// const c2 = new Circle(2);
////5peymayesh azzaye instance
//function Circle(radius) {
//    this.radius = radius;
//    this.move = function () {
//      console.log("move");
//    };
//  }
//  Circle.prototype.draw = function () {
 //   console.log("draw");
  //}; 
//  const c1 = new Circle(1);
  //console.log(Object.keys(c1)); (instance member haro barmigardone)
 // for(let key in c1)
//        console.log(key)//(hame ro barmigardone instance&prototype)
////6piyade sazi verasat shakhsi 
// function Circle(radius){
//     this.radius = radius ;
// }
// Circle.prototype.draw = function (){
//     console.log("draw");
// }
// Circle.prototype.duplicate = function(){
//     console.log("duplicate");
// }
// function Shape(){}
// Shape.prototype.duplicate = function (){
//     console.log("duplicate")
// }
// Circle.prototype = Object.create(Shape.prototype);
// const s = new Shape ();
// const c = new Circle();
////7reset kardan constructor
// function Shape () {

// }
// Shape.prototype.duplicate = function (){
//     console.log("duplicate")
// }
// function Circle(radius){
//     this.radius = radius 
// }
// Circle.prototype = Object.create(Shape.prototype);
// Circle.prototype.constructor = Circle ;
// Circle.prototype.draw = function (){
//     console.log("draw")
// }
// const c = new Circle();
// const s = new Shape();
////8seda zadan constructor valed
// function Shape (color) {
//     this.color = color 
// }
// Shape.prototype.duplicate = function (){
//     console.log("duplicate")
// }
// function Circle(radius,color){
//     this.radius = radius 
//     Shape.call(this,color);
// }
// Circle.prototype = Object.create(Shape.prototype);
// Circle.prototype.constructor = Circle ;
// Circle.prototype.draw = function (){
//     console.log("draw")
// }
// const c = new Circle(2,"red");
// const s = new Shape("red");
////9sakht function verasat
// function Shape (color) {
//     this.color = color 
// }
// Shape.prototype.duplicate = function (){
//     console.log("duplicate")
// }
// function Circle(radius,color){
//     this.radius = radius 
//     Shape.call(this,color);
// }
// extend(Circle,Shape);
// function extend(Parent,Child){
//     Child.prototype = Object.create(Parent.prototype);
//     Child.prototype.constructor = Child;
// }
// Circle.prototype.draw = function (){
//     console.log("draw")
// }
// function Square(size){
//     this.size = size
// }
// extend(Square,Shape);
// const c = new Circle(2,"red");
// const s = new Shape("red");
////10baz tarif method
// function extend(Parent,Child){
//     Child.prototype = Object.create(Parent.prototype);
//     Child.prototype.constructor = Child;
// }
// function Shape () { }
// Shape.prototype.duplicate = function (){
//     console.log("duplicate")
// }
// function Circle(){}
// extend(Circle,Shape);
// Circle.prototype.duplicate = function(){
//     Shape.constructor.duplicate.call(this);
//     console.log("duplicate2")
// }
// const c = new Circle();
////11chand rikhti
// function extend(Parent,Child){
//     Child.prototype = Object.create(Parent.prototype);
//     Child.prototype.constructor = Child;
// }
// function Shape () { }
// Shape.prototype.duplicate = function (){
//     console.log("duplicate")
// }
// function Circle(){}
// extend(Circle,Shape);
// Circle.prototype.duplicate = function(){
//     console.log("duplicate2")
// }
// function Square(){}
// extend(Square,Shape);
// Square.prototype.duplicate = function(){
//     console.log("duplicate square")
// }
// const Shapes = [
//     new Circle(),
//     new Square(),
// ]
// for (let shape of Shapes){
//     shape.duplicate();
// }
// const c = new Circle();
////12classes
// class Circle {
//     constructor(radius){
//         this.radius = radius ;
//         this.move = function(){
//             console.log("move")
//         };
//     };
//     draw(){
//         console.log("draw")
//     }
// }
// const c = new Circle(2);
////11static methods
// class Circle{
//     constructor(radius){
//         this.radius = radius ;
//     }
//     draw(){

//     }
//     // static method
//     static parse(str){
//         const radius = JSON.parse(str).radius;
//         return new Circle(radius);
//     }
// }
// const circle = Circle.parse('{"radius" : 1}');
// console.log(circle);
////12taghir this dar class
// class Circle{
//     draw(){
//         console.log(this)
//     }
// }
// const c = new Circle();
// const draw = c.draw;
// draw();
////13makhfi kardan aza ba symbol
// const _radius = Symbol();
// const _draw = Symbol();
// class Circle{
//     constructor(radius){
//         this[_radius] = radius ;
//     }
//     [_draw](){}
// }
// const c = new Circle(1);
////14makhfi kardan aza ba WeakMap
// const _radius = new WeakMap();
// const _move = new WeakMap();
// class Circle {
//     constructor(radius){
//         _radius.set(this,radius);
//         _move.set(this,()=>{
//             console.log("move" , this);
//         })
//     }
//     draw(){
//         _move.get(this)();
//         console.log(_radius.get(this))
//     }
// }
// const c = new Circle(1);
////15getters & setters for private members
// const _radius = new WeakMap();
// class Circle {
//     constructor(radius){
//         _radius.set(this,radius);
//     };
//     get radius(){
//         return _radius.get(this);
//     }
//     set radius(value){
//         if (value <= 0) throw new Error("invalid radius");
//         _radius.set(this,value);
//     };
// }
// const c = new Circle(1);
////16verasat dar classes
// class Shape {
//     constructor(color){
//         this.color = color;
//     }
//     draw(){
//         console.log("draw")
//     }
// }
// class Circle extends Shape{
//     constructor(color,radius){
//         super(color);
//         this.radius = radius ;
//     }
//     move(){
//         console.log("move");
//     }
// }
// const c = new Circle();
////17baz tarif method
// class Shape {
//     move(){
//         console.log("move");
//     }
// }
// class Circle extends Shape {
//     move(){
//         super.move();
//         console.log("circle move");
//     }
// }
// const c = new Circle();
////18mazhol