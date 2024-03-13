// let fname = "saman" ;
// let age = 32 ;
// let lname = 'jebelli' ;
// console.log(fname) ;
// console.log(lname) ;
// console.log(age) ;
// //bool
// let admin = false ;
// console.log(admin);
// //undifined
// let city ;
// console.log(city) ;
// //null
// let country = null ;
// console.log(country) ;
// //object
// let person = {
//     name : "shayan" , 
//     aage : 23 ,
//     aadmin : true ,
// }

// console.log(person) ;

// let persons = {
//     page : 35 ,
//     book : 'ریاضی' ,
//     year : "دوازدهم" ,
// }

// console.log(persons) ;

// // array

// let users = ["iliya" , "mahdi"] ;
// users[2] = 'shahin' ;
// users[5] = 'saman' ;
// users[3] = 32 ;
// users[4] = true ;

// console.log(users.length) ;

// //function
// function great(sssss,agee){
//     let calc = 2 + 2 ;
//     console.log('hello ' + sssss + ' you are ' + agee + ' years old') ;
//     console.log(calc) ;
// } 

// great('seyed' , 23);

// function square (number){
//     return number * number ;
// }

// let result = square(4) ;
// console.log(result) ;

// // amalgar haye mohasebati

// let x=10;
// let y=5;
// console.log(++x) ;

// //amalgar haye entesabi

// let z = 5;
// let v = 8;
// // += -= *= /= %=
// z = z + v ;
// //z += v ; (z = z+v);
// //z *= v ; (z= z*v);
// //z -= v ; (z=z-v);
// //z /= v ; (z=z/v);
// //z %= v ; (z=z%v);
// //z++ (z=z+1);
// //z-- (z=z-1);
// console.log(z) ;

// // amalgar haye moghayeseei

// let b=1;
// //relational (> , >= , < , <=)
// //equality ==> 2daste dare 
// // 1-lose equality , 2-strict equality
// // 1- lose equality ==> (== , !=)
// // 2- strict equlity ==> (=== , !===)
// console.log(1 === 1) ;

// // amalgar ternery

// let athenticated = false ;
// let buttonText = athenticated === true ? "dashboard" : "login" ;
// console.log(buttonText);

// // amalgar haye manteghi(logical)
// // 3 noe darim ==> 1-logical AND , 2-logical OR , 3-not
// // logical AND (&&)
// // logical OR (||)
// // not (!)
// console.log(true && true);
// let productCount = 3;
// let productPtice = 1000;
// let credit = 1200 ;
// let buy = productCount > 0 || credit > productPtice ;
// console.log(buy);

// //amalgar haye manteghi bar roye gheir booli ha
// // false , undefined , null , 0  , string("" '') , not a number (har kodam bashad false neshan midahd)
// // true , 1 , -1  (har kodom bashad true neshan midahad)
// amalgar haye bity
console.log( 1 & 2 ) ;

// taghadom amalgarha
let s = 5 + 3 * 10 ;
console.log(s); 
//if ... else 
// mesal --> az 6 am ta 12 pm (good morning) , az 12pm ta 6 pm (good afternoon) , otherwise (good evening)
let hour = 20 ;
if(hour>=6 && hour<12){
    console.log("goodmorning");
}else if(hour>=12 && hour<18){
    console.log("goodafternoon");
} else {
    console.log("goodevening");
}
// switch-case 
let role = "guest";

switch (role) {
    case 'guest':
        console.log('guest user') ;
        break ;
    case 'admin':
        console.log('admin user') ;
        break ;
        default :
        console.log('unknown user') ;
}
if(role === "guest"){
    console.log("guest user");
}else if(role === "admin"){
    console.log("admin user");
}else{
    console.log('unknown user');
}

let status = 'bad' ;

switch (status) {
    case 'good' :
        console.log('good player');
        break;
    case 'bad' :
        console.log('bad player')
        break;
    default:
        console.log('soso palyer'); 
}

if(status === 'good'){
    console.log('good palyer');
}else if(status === 'bad'){
    console.log('bad player');
}else{
    console.log('soso palyer');
}

// halghe (for)

for(let i=0;i<5;i++){
    console.log('ahmad');
    if(i % 2 == 0){
        console.log(i);
    }
};
for(let p=10;p>=1;p--){
    console.log(p);
};

// halghe (while)

for (let o = 0 ; o < 0 ; o++) {
    console.log(o);
}
 
let o = 0 ;
while(o<5){
    console.log(o);
    o++;
}

// halghe (do-while)

let u = 0 ;
do{
    console.log(u);
    u++;
}while(u<=5);

// halghe (for-of & for-in)

const persons = {name:'shahrokh' , age:32} ;

for (let key in persons){
    console.log(key);
    console.log(persons[key]);
 }

const colors = ['red' , 'yellow' , 'green'] ; 

for ( let index in colors) {
    console.log(colors[index]);
};

const seasons = ['spring' , 'winter' , 'summer'] ;

for ( let season of seasons){
    console.log(season);
};

// braek and continue

let t = 0 ;

while(t<=10){
    if(t == 5){
        t++;
        continue;
    };
    console.log(t);
    t++;
}; 

let r = 0 ;

while(r<=10){
    if(r==5){
        break;
    }
    console.log(r);
    r++;    
};

// objectha

