let name = "saman" ;
console.log(name);

let person = {
    namee : "shayan" ,
    age : 23 ,  
    admin : true ,
} ; 
console.log(person["age"]);

let users = ["shayan" , "saman"];
users[3] = "ahmad" ; 
users[4] = 24 ;
users [2] = "sasha" ;

console.log(users.length);

function great(nname , aage){
    let calc =  2 + 2 ;
    console.log('Hello Saman');
    console.log(calc) ;
    console.log('Hello '+ nname + ' you are ' + aage + ' years old');
}

great ("Seyed" , 30) ;

function square (number){
    let result = number * number ;
    return result ;
}

let result = square(4);
console.log(result);

// let x = 5 ;
// let y = 8 ;
// console.log( x-- ) ;
// console.log(x) ;

let c = 4 ;
let v = 6 ;
c = c + v ; // c+=v 
console.log(c);

let z = 10 ;
console.log(z > 10) ;

// lose equality (== , !=)

let x = 1 ;
console.log(x != 1);

// strict equality (=== , !==)

let y = 10 ;
console.log(y !== 10);

let athenticated = true ;
let bottonText = athenticated === true ? "dashboard" : "log in" ;
console.log(bottonText) ;

let ProductCount = 3 ;
let ProductPrice = 1000 ;
let credit = 1100 ;
let buy = ProductCount > 0 && credit > ProductPrice ;
console.log(buy);

// if ... else 

let hour = 20 ;

if ( hour>6 && hour<=12 ){
    console.log('good morning');
}else if(hour>12 && hour<=18){
    console.log('good afternoon');
}else{
    console.log('good evening');
};

// switch & case

let role = 'admin' ;

switch(role){
    case 'guest':
        console.log('guest user');
        break;
    case 'admin':
        console.log('admin user');
        break;
    default:
        console.log('unknown user');
};

let role1 = 'guest1' ;

if(role1 === 'guest1'){
    console.log('guest user');
}else if(role1 === 'admin1'){
    console.log('admin user');
}else{
    console.log('uknown');
};

//halghe for

for ( i=0 ; i<=5 ; i++ ){
    console.log(i);
}; 
for(o=10 ; o>=0 ; o--){
    console.log(o);
};

// halghe while

let p = 0 ;
while(p<=5){
    console.log(p);
    p++;
};

// halghe do while

let u = 0 ;
do{
    console.log(u);
    u++;
}while(u<=5);

// halghe for in & for of

const person1 = {namme : 'saman' , agge : 20};

for(let key in person1){
    console.log(key);
    console.log(person1[key]);
};

const colors = ['red' , 'yellow' , 'bleu'];

for(let color of colors){
    console.log(color);
};

// break and continue 

let e = 0 ;

while(e<=10){
    if(e == 5){
        break;
    }
    console.log(e);
    e++;
};

let w = 0 ;

while(w<=10){
    if(w==5){
        w++;
        continue;
    }
    console.log(w);
    w++;
} ;

// object ha

// let radius = 1 ;

// let s = 1 ;
// let q = 1 ;

// let circle = {
//     radius : 1 ,
//     lacation : {
//         s : 1 ,
//         q : 1 ,
//     },
//     isVisible :true, 
//     draw : function (){console.log('draw')},
// } ;  

// factory function

function createCircle (radius){
    return {
        radius , 
        draw (){console.log('draw')},
    }
};

let circle1 = createCircle(1);
console.log(circle1);

let circle2 = createCircle(2);
console.log(circle2);

// constructor function
// 2 type namgozari darim (1-camel notation {oneTwo} , 2-pascal notation {OneTwo})
// baraye constructor az pascal notation behtare estefade she , baraye factory az camel natation 

function Circle(radius){
    this.radius = radius,
    this.draw=function(){
        console.log('draw')
    }
};

const circle = new Circle(5);
console.log(circle);

// dynamic bodan objectha

const colorr = {
    paint : 1,
}

colorr.coloor="Red";
colorr.book= function (){};
delete colorr.book;

console.log(colorr);

// function haye object and

//*hame function ha yek object hastand

// different between references and first type
//array ham function hastand

let s = {value : 10} ;
let f = s ;

s.value=20;

console.log(f);

let obj = {value : 20};
function increase(obj){
    obj.value++;
};
increase(obj);
console.log(obj);

// peymayesh property haye object

const sea = {
    radius:1 ,
    draw(){
        console.log('draw')
    },
};
// ravesh 1
let seaKeys = Object.keys(sea);
console.log(seaKeys);

for(let key of seaKeys){
    console.log(key);
};
// ravesh 2
let seaEntries = Object.entries(sea);
//console.log(seaEntries);
for (let entry of seaEntries){
    console.log(entry);
};
//ravesh 3
if ('radius' in sea){
    console.log('yes');
    console.log("draw" in sea);
};

// clone kardan object

const row = {
    radius : 1 ,
    draw(){
        console.log("draw");
    },
};

// const another = {} ;

// for (let key in row){
//     another[key] = row[key];
// };

// const another = Object.assign({color : 'yellow'}, row)

const another = {location:1 , color : 'red' , ...row};

console.log(another);

// garbage collection (moteghayer va sabet hayi ke faza eshghsl kardeand ra shenasayi va hazf mikonad)
