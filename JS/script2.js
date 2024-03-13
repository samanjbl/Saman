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
console.log(buy) ;
