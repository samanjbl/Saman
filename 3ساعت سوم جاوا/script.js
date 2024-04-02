////property description
// let person = {name : "saman"}
// console.log(person);
// for(let key in person)
//     console.log(key);
// console.log(Object.keys(person));
// let objectBase = Object.getPrototypeOf(person);
// let descriptor = Object.getOwnPropertyDescriptor(objectBase,"toString");
// console.log(descriptor);
// Object.defineProperty(person,"name",{
//     writable : false ,
//     enumerable : false
// })
// person.name="ali";
////constructor prototype
// function Circle(radius){
//     this.radius = radius 
//     // this.draw = function(){
//     //     console.log("draw")
//     // }
//     this.move = function(){
//          this.draw ;
//         console.log("move")
//     }
// };
// Circle.prototype.draw = function (){
//     //this.move ;
//     console.log("draw")
// }
// Circle.prototype.toString = function(){
//     return "circle with radius : " + this.radius
// }

// const c1 = new Circle(2);
// const c2 = new Circle(3);
//// peymayesh aazaye prototype & instance
// function Circle(radius){
//     this.radius = radius ,
//     this.move = function(){
//         console.log("move")
//     }
// }
// Circle.prototype.draw = function(){
//     console.log("draw")
// }
// const c1 = new Circle(2);
// // console.log(Object.keys(c1));
// for(let key in c1){
//     console.log(key)
// }
////piyade sazi verasat shakhsi
// function Shape(){

// }
// Shape.prototype.duplicate = function(){
//     console.log("duplicate")
// }
// function Circle(radius){
//     this.radius = radius
// }
// Circle.prototype = Object.create(Shape.prototype);
// Circle.prototype.draw = function(){
//     console.log("draw")
// }
// Circle.prototype.duplicate = function(){
//     console.log("duplicate")
// }

// const s = new Shape();
// const c = new Circle();
////reset kardan contructor
// function Shape (){}

// Shape.prototype.duplicate = function(){
//     console.log("duplicate")
// };
// function Circle(radius){
//     this.radius = radius ;
// };
//  Circle.prototype = Object.create(Shape.prototype);
//  Circle.prototype.cunstructor = Circle;
// Circle.prototype.draw = function(){
//     console.log("draw")
// };
// const s = new Shape();
// const c = new Circle();
////seda zadan cunstructor valed
// function Shape (color){
//     this.color = color
// }
// Shape.prototype.duplicate = function(){
//     console.log("duplicate")
// };
// function Circle(radius,color){
//     Shape.call(this,color);
//     this.radius = radius ;
// };
// Circle.prototype = Object.create(Shape.prototype);
// Circle.prototype.cunstructor = Circle;
// Circle.prototype.draw = function(){
//     console.log("draw")
// };
// const s = new Shape();
// const c = new Circle(13,"red");
////sakht function verasat
// function Shape (color){
//      this.color = color
// }
// Shape.prototype.duplicate = function(){
//      console.log("duplicate")
// };
// function Circle(radius,color){
//      Shape.call(this,color);
//      this.radius = radius ;
// };
// function extend(Child,Parent){
//     Child.prototype = Object.create(Parent.prototype);
//     Child.prototype.cunstructor = Child;
// };
// extend(Circle,Shape);
// Circle.prototype.draw = function(){
//      console.log("draw")
// };
// function Square(size){
//     this.size = size
// };
// extend(Square,Shape);
// const s = new Shape();
// const c = new Circle(13,"red");
////baz tarif method
// function extend(Child,Parent){
//    Child.prototype = Object.create(Parent.prototype);
//    Child.prototype.cunstructor = Child;
// };
// function Shape (){}
// Shape.prototype.duplicate = function(){
//     console.log("duplicate")
// };
// function Circle(){}
// extend(Circle,Shape);
// Circle.prototype.duplicate = function (){
//     Shape.prototype.duplicate();
//     console.log("duplicate circle");
// }
// const s = new Shape();
// const c = new Circle();
////chand rikhti
// function extend(Child,Parent){
//     Child.prototype = Object.create(Parent.prototype);
//     Child.prototype.cunstructor = Child;
// };
// function Shape (){}
// Shape.prototype.duplicate = function(){
//     console.log("duplicate")
// };
// function Circle(){}
// extend(Circle,Shape);
// Circle.prototype.duplicate = function (){
//     Shape.prototype.duplicate();
//     console.log("duplicate circle");
// }
// function Square (){}
// extend(Square,Shape);
// Square.prototype.duplicate = function(){
//     console.log("duplicate square")
// };
// const shapes =[
//     new Circle(),
//     new Square()
// ]
// for (let shape of shapes){
//     shape.duplicate
// }
////classes
// function Circle(radius){
//     this.radius = radius ,
//     this.draw = function(){
//         console.log("draw")
//     }
// };
// class Circle{
//     constructor(radius){
//         this.radius = radius;
//         this.move = function (){
//             console.log("move")
//         }
//     }
//     draw(){
//         console.log("draw");
//     }
// };
// const c = new Circle(1);
////hoisting in class
// class decloration & class expression
// const c = new Circle();
// const s = new Square();
// class Circle(){

// }
// const Square = class{

// }
////static methods
// class Circle{
//     constructor(radius){
//         this.radius = radius;
//     };
//     draw(){
//         console.log("draw")
//     }
//     //static method
//     static parse(str){
//         const radius = JSON.parse(str).radius;
//         return new Circle(radius);
//     }
// }
// const circle = Circle.parse('{"radius" : 1}');
////taghir this dar class
// "use strict"
// const Circle = function(){
//     this.draw = function(){
//         console.log(this);
//     }
// };
// const c = new Circle();
// const draw = c.draw.bind(c);
// draw();
// class Circle{
//     draw(){
//         console.log(this)
//     }
// }
// const c = new Circle();
// const draw = c.draw ;
// draw();
////makhfi kardan aaza ba symbol
// const _radius = Symbol();
// const _draw = Symbol();
// class Circle{
//     constructor(radius){
//         this[_radius] = radius;
//     };
//     [_draw](){

//     }
// };
// const c = new Circle(1);
// const key = Object.getOwnPropertySymbols(c)[0];
// console.log(c[key]);
////makhfi kardan aaza ba weakmap
// const _radius = new WeakMap();
// const _move = new WeakMap();
// class Circle{
//     constructor(radius){
//         _radius.set(this,radius);
//         _move.set(this,()=>{
//             console.log("move",this);
//         })
//     };
//     draw(){
//         _move.get(this)();
//         console.log(_radius.get(this));
//     };
// };

// const c = new Circle(1);
////getters & setters for private members
// const _radius = new WeakMap();
// class Circle {
//     constructor(radius) {
//         _radius.set(this,radius);
//     };
//     get radius(){
//         return _radius.get(this);
//     };
//     set radius(value){
//         if(value <= 0) throw new Error("ivalid radius");
//         _radius.set(this,value);
//     };
// }
// const c = new Circle(1);
////verasat dar classes
// class Shape{
//     constructor(color){
//         this.color = color ;
//     }
//     move(){
//         console.log("move")
//     }
// }
// class Circle extends Shape{
//     constructor(color,radius){
//         super(color);
//         this.radius = radius;
//     }
//     draw(){
//         console.log("draw")
//     }
// }
// const c = new Circle("red");
////baz tarif kardan method
// class Shape{
//     move(){
//         console.log("move")
//     }
// }
// class Circle extends Shape{
//     move(){
//         super.move();
//         console.log("circle move")
//     }
// }
// const c = new Circle();
////mazhol
// AMD
//COMMONJS
//UMD
//Es6 Moduls
////CommonJS
// const _radius = new WeakMap();
// class Circle {
//     constructor(radius){
//         _radius.set(this,radius);
//     };
//     draw(){
//         console.log("circle eith radius : " + _radius.get(this))
//     }
// }
// const c = new Circle();
// c.draw();
//module.exports = Circle ;
// module.exports = { Circle : Circle , Square : Square }
// const Circle = require("./circle(پسوند لازم نیست نوشته شه)")
////Es6-moduls
// const _radius = new WeakMap();
// export class Circle {
//     constructor(radius){
//         _radius.set(this,radius);
//     }
//     draw(){
//         console.log("circle with radius : " + _radius.get(this))
//     }
// }
// import {Circle} from "./circle(اسم فایل).js";
// const c = new Circle(10);
// c.draw();
////chera az babel & webpack estefade mikonim?
//transpiler => translate & compiler => (babel)
//bondler =>همه ی فایل های جاوا مارا به یک فایل تبدیل میکند => (webpack)
////callback
// function ball1(ball2){
//     setTimeout(()=>{
//         console.log("the ball one reached the end of the hill")
//     },3000)
//     ball2(ball3);
// }
// function ball2(ball3){
//     setTimeout(()=>{
//         console.log("the ball two reached the end of the hill")
//     },2000)
//     ball3();
// }
// function ball3(){
//     setTimeout(()=>{
//         console.log("the ball three reached the end of the hill")
//     },1000)
// }
// ball1(ball2);
////modiriyat khataha dar callback
// function ball1(ball2){
//     setTimeout(()=>{
//         try{
//             if(true){
//                 console.log("the ball one reached the end of the hill")
//                 ball2(ball3);
//             }else{
//                 throw new Error("the ball one failed")
//             }
//         }catch(e){
//             console.log(e);
//         }
//     },2000)
// }
// function ball2(ball3){
//     setTimeout(()=>{
//         try{
//             if(false){
//                 console.log("the ball two reached the end of the hill")
//                 ball3();
//             }else{
//                 throw new Error("the ball two failed")
//             }
//         }catch(error){
//             console.log(error)
//         }    
//     },1000)
// }
// function ball3(){
//     setTimeout(()=>{
//         console.log("the ball thre reached the end of the hill")
//     },3000)
// }
// ball1(ball2);
// function ball1(callback) {
//     setTimeout(()=>{
//         callback(true);
//     },3000)
// }
// function ball2(callback){
//     setTimeout(()=>{
//         callback(true);
//     },1000)
// }
// function ball3(){
//     setTimeout(()=>{
//         callback(true);
//     },2000)
// };
// ball1((res)=>{
//     try{
//         if(res){
//             console.log("the ball one reached the end of the hll");
//             ball2((res)=>{
//                 try{
//                     if(res){
//                         console.log("the ball two reached the end of the hll");
//                         ball3();
//                     }else{
//                         throw new Error("the ball two failed");
//                     }
//                 }catch(error){
//                     console.log(error);
//                 }
//             })
//         }else{
//             throw new Error("the ball one failed");
//         }
//     }catch(e){
//         console.log(e);
//     }
// });
////promise
// function ball1(){
//     return new Promise((resolve,reject)=>{
//         if(true){
//             resolve("the ball one reached")
//         }else{
//             reject("the ball one failed")
//         }
//     })
// }
// function ball2(){
//     return new Promise((resolve,reject)=>{
//         if(true){
//             resolve("the ball two reached")
//         }else{
//             reject("the ball two failed")
//         }
//     })
// }
// function ball3(){
//     return new Promise((resolve,reject)=>{
//         if(true){
//             resolve("the ball three reached")
//         }else{
//             reject("the ball three failed")
//         }
//     })
// }
// ball1().then((msg)=>{
//     console.log(msg);
//     return ball2();
// }).then((msg)=>{
//     console.log(msg);
//     return ball3();
// }).then((msg)=>{
//     console.log(msg)
// }).catch((error)=>{
//     console.log(error);
// });
////async & await
async function ball1(){
        if(true){
            return("the ball one reached")
        }else{
            throw new Error("the ball one failed")
        }
}
function ball2(){
        if(true){
            return("the ball two reached")
        }else{
            throw new Error("the ball two failed")
        }
}
function ball3(){
        if(true){
            return ("the ball three reached")
        }else{
            throw new Error("the ball three failed")
        }
}
async function execute(){
    try{
    console.log(await ball1());
    console.log(await ball2());
    console.log(await ball3());
    }catch(e){
        console.log(e)
    }
};
execute();