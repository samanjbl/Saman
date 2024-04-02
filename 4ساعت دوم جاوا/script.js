//// object math
// Math.round - Math.max - Math.min - Math.abs 
function getRandomArtbitrary(min,max){
    return Math.floor (Math.random() * (max-min) + min) ;
};

//// object string
// message.length - message[] - message.include('') - message.startWidth - message.endsWidth - message.indexOf("") - message.replace('') - message.toUpperCase() - message.toLowerCase() - message.trim() - message.split(" ")
const message = ' neon .  coding is cool ';
console.log(message);

// template literal

const another = ` 'neon' . 
coding is cool .
`;
console.log(another);

let name = "saman";
let msg = `hi ${ name } . thank you `;
console.log(msg);

//// object date 
//date1.toDateString - date1.toISOString - date1.getDate - date1.gatDay - date1.getFullYear - date1.getMonth - date1.setFullYear
const now = new Date();
const date1 = new Date('May 11 2024 09:00');
const date2 = new Date(2024, 4, 11, 9);

// ezafe kardan element be array

const numbers = [3,4];
console.log(numbers);
numbers.push(5,6);// be akhar ezafe mikone
console.log(numbers);
numbers.unshift(1,2);// be aval ezafe mikone
console.log(numbers);
numbers.splice(3,0,3.5,3.6,3.7,3.8,3.9);//harja ke bakhaim ezafe mikone(ghabl kodom andis bashad,chndta hazf kone , chizi ke mikhaim ezafe kone )
console.log(numbers);

////yaftan element dar array
// bayad aval bedonim premitive hast ya refrence
//premitive
const number = [1,2,3,4];
console.log(number.indexOf(1));
// refrence
// const courses = [
//     {id : 1 , nname : "a"},
//     {id : 2 , nname : "b"}
// ];

// const result = courses.findIndex(function (course){
//     return course.id === 1
// });

// console.log(result);

//arrow function

const courses = [
    {id : 1 , nname : "a"},
    {id : 2 , nname : "b"}
];

const result = courses.find( course=> course.id === 1 );

console.log(result);

//// hazf element az array

const num = [1,2,3,4];
// const last = num.pop();
// const first = num.shift();
const set = num.splice(3,2)
console.log(num);
// console.log(last);
// console.log(first);

//hazf hame element haye array

let nu = [1,2,3,4] ;
let anoter = nu ;
nu.length = 0 ;
console.log(nu) ;
console.log(anoter) ;

//// alhagh va boresh array 

const one = [{id : 1}] ;
const two = [4,5,6] ;

const combined = one.concat(two) ;
one[0].id=10;
console.log(combined) ;
// const slice = combined.slice(2,4);
// console.log(slice);

//// amalgar spread dar array
const yek = [1,2,3];
const dow = [4,5,6];

const mix = ["a",...yek,'c',...dow,"b"];
console.log(mix);

////peymaesh array 
const addad = [1,2,3] ;

// for (let adad in addad)
//     console.log(adad);
addad.forEach((adad,i)=>console.log(i,adad));

//// join kardan yek array

// const aadad = [1,2,3] ;
// const joined = aadad.join("");
// console.log(joined);

const mesage = "Neon coding is cool";
const parts = mesage.split(" ");
console.log(parts);
const combine = parts.join('-');
console.log(combine);

//// moratab sazi array 

const adaad = [
    {id : 1 , nam : "html" },
    {id : 2 , nam : "css" },
] ;

adaad.sort(function(a,b){
    let nameA = a.nam.toLowerCase();
    let nameB = b.nam.toLowerCase();
    if (nameA<nameB) return 1;
    if (nameB>nameA) return -1;
    return 0 ;
});

console.log(adaad);

//// test element haye array 

const se = [1,2,3,-1] ;

const atLeastOnePositive = se.some(function(value){
    return value >= 0 ;
});

console.log(atLeastOnePositive);

//// filter kardan yek array

const char = [1,-1,2,3] ;

const filtered = char.filter(v => v >=0 );

console.log(filtered);

const users = [
    {naame : "saman" , age : 20},
    {naame : "saman" , age : 22},
    {naame : "saman" , age : 24},
    {naame : "saman" , age : 26},
    {naame : "saman" , age : 28},
];
const resultt = users.filter(user => user.age >= 24 );
console.log(resultt);

////map kardan array 

const pang = [1 , 3 , 5 , 7] ;

const resuult = pang.map( value => value * 2 );

console.log(resuult);

const products = ["html" , "css" , "js"] ;

const items = products.map( product =>  ({value : product }));

console.log(items);

// const html = `<ul>${items.join("")}</ul>`;

// console.log(html);

//// kari ke this anjam midahad 

const video = {
    title : "a" ,
    tags : ['a' , 'b' , 'c'],
    showTags(){
        this.tags.forEach(function(tag){
            console.log(this , tag);
        } , {nm : "saman"} ) 
    },
};
video.showTags();
// function Video (title){
//     this.title = title ;
//     console.log(this);
// };
// const v = new Video("abc");

////hoisting
//function decloration(ghabl az function anra seda bezanim amal mikonad)
function walk (){
    console.log("walk")
}
//function expression(ghabl az function anra seda bezanim amal nemikonad)
let run = function(){
    console.log("run");
};
////argoman
function sum(a,b){
    console.log(arguments);
    let total = 0 ;
    for(let value of arguments)
        total += value 
    return total
}
console.log(sum(1,2,3,56));
////method reduce dar array 
const plus = [1,-1,2,3] ;
// ravesh aval
// let summ = 0 ;
// for (let n of plus){
//     summ =+ n
// }
// console.log(summ);
// ravesh dovom
let summ = plus.reduce(function(accumulator, currentValue){
    return accumulator + currentValue
}, 0 )
console.log(summ);
////meghdar dehi avaliye parameter
function interest(principal, rate=3.5, years=5){
    return ((principal * rate) / 100) * years
}
console.log(interest(100000));
////getters & stters 
//getters => access properties 
//setters = > change (mutate)
const person = {
    fname : "saman" ,
    lname : "jebelii",
    get fullName(){
        return `${person.fname} ${person.lname}`;
    },
    set fullName(value){
        const part = value.split(" ");
        this.fname = part[0];
        this.lname = part [1];
    }
}
person.fullName = "shayan jebelli";
console.log(person);
// console.log(`${personality.fname} ${personality.lname}`); ( ravesh aval)
////amalgar rest 
function suum(discount , ...args){
    const totaal = args.reduce((a,b)=>a+b)
    return totaal * (1-discount);
}
console.log(suum(0.5 ,1,2,3,4,5,17));
////scop ha
// const color = "red"
// function start(){
//     const msge = "saman";
// }
// console.log(color);
// function stop(){
//     const msge = "saman";
//     let age = 18 ;
//     if(true){
//         age = 20 ;
//         // console.log(age);
//     }
//     console.log(age);
// }
// start();
// stop();
////tarif motagheyar ba var
// var => function-scoped
// let&const => block-scoped
// function start(){
//     for(var i = 0 ; i<5 ; i++){
//         console.log(i);
//     }
//     console.log(i);
// }
// start();
// var color = "red" ;
// let agee = 10 ;
// function sayHi(){
//     console.log(hi);
// }
////try & catch
const perrson = {
    fname : "saman" ,
    lname : 'jebelli',
    get fullName(){
        return `${fname} ${lname}` ;
    },
    set fullName(value){
        const partt = value.split(' ');
        if(typeof value !== "string")
            throw new Error("value is not a string");
        if(partt.length !== 2)
            throw new Error("Enter a first and last name")
        this.fname = partt[0] ;
        this.lname = partt [1];
    }
};
try{
    perrson .fullName = "shayanjebelli" ;
}catch(e){
    console.log(e)
}
console.log(perrson);
////taghir dadan this
const movie = {
     title : "saman" ,
     tag : ["a","b","c"],
     showTag(){
         this.tag.forEach((tag)=>{
             console.log(this.title , tag)
         }  )
     }
}
movie.showTag();
////mafahim barname nevisin shey(شیء) gara
//incapsolation
let employee= {
    basesalary : 30000 , 
    overtime : 10 , 
    rate : 20 ,
    getWate(){
        return this.basesalary + (this.overtime + this.rate);
    },
};
//appstraction
//inheritence
//polimorfision
////abbstraction
// function Circle(radius){
//     this.radius = radius ;
//     let defultLocation = { x : 0 , y : 0};
//     let computeOptimumLocation = function(factor){
//         // ...
//     };
//     this.draw = function(){
//         computeOptimumLocation();
//         console.log("draw");
//     };
// }
// const circle = new Circle(10);
////prototype