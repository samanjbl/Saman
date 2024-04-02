////1math object
function getRandomArtbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
////2object string
// const message = "saman-wellcome-to-console" ;
// console.log(message);
////3template literal
// const another = ` 'saman' ,
// coding is cool`
// console.log(another);
let nam = "saman";
let msg = `hi ${nam} . thank you`;
console.log(msg);
////4object date
const now = new Date();
const date1 = new Date("may 11 2021 09:00");
const date2 = new Date(2021, 4, 11, 9, 0);
////5ezafe kardan element be array
// const numbers = [3,4];
// console.log(numbers);
// numbers.push(5,6);
// console.log(numbers);
// numbers.unshift(1,2);
// console.log(numbers);
// numbers.splice(3,0,3.5,3.6);
// console.log(numbers);
////6yaftan element dar array va 7arrow function
//premitive
// const numbers = [1,2,2,3] ;
// console.log(numbers.indexOf(1));
//refrences
const courses = [
  { id: 1, name: "saman" },
  { id: 2, name: "sami" },
];
// const result = courses.find((course) => course.id === 1 );
// console.log(result);
////8hazf element az array
// const number = [1,2,3,4] ;
// const last = number.pop(); //(akharin ro hazf mikone)
// console.log(last);
// const first = number.shift(); (avalin ro hazf mikone)
// console.log(first);
// const middle = number.splice(2,2);
// console.log(middle);
// console.log(number);
////9hazf hame element haye array
// let numbers = [1,2,3,4] ;
// let another = numbers ;
// numbers.length = 0 ; / numbers.splice(0,numbers.length)
// console.log(numbers);
// console.log(another);
////10alhagh va boresh array
// const first = [{id : 1}] ;
// const second = [ 4,5,6] ;
// first[0].id = 10
// const combined = first.concat(second);
// console.log(combined) ;
// const slice = combined.slice(1,5);
// console.log(slice);
////11amalgar spread dar array
// const first = [1,2,3] ;
// const second = [4,5,6] ;
// const combined = ["a",...first ,"b", ... second,"c"] ;
// console.log(combined);
////12peymayesh array
// const numbers = [1,2,3] ;
// for(let number of numbers){
//     console.log(number);
// } ravesh aval
//ravesh dovom (forEach)
// numbers.forEach((i,number) => console.log(i,number) );
////13join kardan yek array
// const numbers = [1, 2, 3];
// const joined = numbers.join("-");
// console.log(joined);
// const message = "hy saman , thank you" ;
// const parts = message.split(" ");
// const combined = parts.join('/')
// console.log(parts);
// console.log(combined);
////14moratab sazi array
// const numbers = [1,4,3,2,5];
// numbers.sort();
// const reverse = numbers.reverse();
// console.log(numbers);
// console.log(reverse);
// const numbers = [
//     {name : "saman" , id : 1} ,
//     {name : "shayan" , id : 2},
// ];
// numbers.sort(function(a,b){
//     let nameA = a.name.toUpperCase();
//     let nameB = b.name.toUpperCase();
//     if(a.name>b.name) return -1 ;
//     if(b.name<a.name) return 1 ;
//     return 0 ;
// }) ;
// console.log(numbers);
////15test element haye array
// const numbers = [ 1,2,3,-1] ;
// const allPositive = numbers.every(function(value){
//   return value >= 0 ;
// });(hame bayad dorost bashan , age yeki ghalat bashe false minevise)
// console.log(allPositive);
// const number = [1,2,3,-1] ;
// const atLeastOnePositive = number.some(function(va){
//   return va >= 0 ;
// })(age yeki dorost bashe true minevise)
// console.log(atLeastOnePositive);
////16filter kardan array
// const numbers = [1,-1,2,3];
// const filtered = numbers.filter(value => value >= 0 );
// console.log(filtered);
// const users = [
//   {name:"saman" , age : 19},
//   {name:"saman" , age : 20},
//   {name:"saman" , age : 21},
//   {name:"saman" , age : 23},
//   {name:"saman" , age : 24},
// ];
// const result = users.filter(user => user.age >= 20 );
// console.log(result);
////17map kardan yek array
// const numbers = [1,3,5,7] ;
// const result = numbers.map(function(number){
//   return number * 2 ;
// }) ;
// console.log(result);
// const products = ["html" , "css" , "js"] ;
// const items = products.map(product => ({value : product}) );
//`<li>${product}</li>` ;
//  return obj (inhaham mitonim anjam dahim)
// console.log(items);
// const html = `<ul>${items.join('')}</ul>`;
// console.log(html);
////18kari ke this anjam midahad
// const video = {
//   title : "a" ,
//   tags : ["a","b","c"] ,
//   showTags(){
//     this.tags.forEach(function(tag){
//       console.log(this , tag);
//     } , this );
//   },
// };
// video.showTags();
// function Video(title){
//   this.title = title;
//   console.log(this);
// }
// const v = new Video("abc");
////19hoisting
//function decloration (ghbal az function anra seda baznim kar mikonad)
walk(); //amal mikone
function walk() {
  console.log("walk");
}
//function expression (akhar in function behtare ; bezarim)&(ghbal az function anra seda baznim kar nemikonad)
let run = function () {
  console.log("run");
};
////20argoman
// function sum (a,b){
//     return a+b
// }
// console.log(sum(1,2));agar bishtar 2ta bashad faghat hamonaii ke niaz darad estefade mikone
// function sum(){
//     console.log(arguments);
//     let total = 0 ;
//     for(let value of arguments)
//       total += value ;
//     return total
// };
// console.log(sum(1,2,3,5,4));ba in kar mitonim har tedad ke mikhahim vorodi be function ezafe konim
////21method reduce dar array
const numbers = [1, 2, 3, 4, 5, -1];
//ravesh aval
// let sum = 0 ;
// for (let n of numbers)
//    sum+=n ;
// console.log(sum);
//ravesh dovom
let sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
});
console.log(sum);
////22meghdar dehi avaliye parameter
function interest(principal, rate, years) {
  //rate=rate || 3.5 ; meghdar dehi be sorat default
  return ((principal * rate) / 100) * years;
}
console.log(100000, 3.5, 5);
//be sorat default mitonim joloye function dar parantez meghdar dehi konim & dar function ravesh dovom hast
// hatman bayad moghe meghdar ya akharin parameter ma bashad ya bad az onam bayad dashte bashand
//ya da log gereftan on parameter ma ke meghdar dadim , undefined benevisim
////23getters & setters
// const person = {
//   fname : "saman" ,
//   lname : "jebelli",
//   get fullName(){
//     return `${person.fname} ${person.lname}`
//   },
//   set fullName(value){
//     const part = value.split(' ');
//     this.fname = part [0];
//     this.lname = part [1];
//   },
// };
//  person.fullName = "shayan jebelli";
// console.log(person);
// console.log(person.fullName);
////24amalgar rest 
function summ(discount , ...args) {
  const total = args.reduce((a,b)=> a+b);
  return total * (1-discount);
}
console.log(summ(0.3 ,10,11,12,13));
// parameter ke ro oon rest estefade mikonim bayad akharin parameter ma bashad
////25skop
// taeein mikone ke yek motegheyar ya sabet taein mikonad ke koja dar dastres bashad
// masalan age dar yek block ye let dashte bashim on let dar skop hamon block mahdod mishe va nemitanim jaye dige estefade konim
// function start(){
//   const mesage = "saman" ;
//   if(true){
//     const anoter = "say hi"
//   }
//   console.log(anoter)// anoter dar block if mahdod mishe va ma nemitonim biron on block estefade konim
//   for (let i = 0 ; i<5 ; i++){
//     console.log(i);//dar khod block faghat mishe log gereft
//   }
// }
//hata function ro seda konim ham baz kar nemikone
//const color = "red"  // skop in global mishe , hame ja dar dastres ast
////26tarif moteghayer (var) (aval faghat var bode bad let va const ezafe shoden)
function start(){
    for(var i = 0 ; i<5 ; i++)
        console.log(i);
    console.log(i);
}
start();
// var => function-scoped
// let&const => blocked scoped
var color = "red" ; // be window dar console.log michasbe
let agee = 10 ;
function sayHi(){
  console.log("hy")
}
////27try&catch
// اگر در مقابل person.fullName یک عبارت غیر استرینگ بنویسیم کار نمیکند به همین علت باید از روش دیگه ای استفاده کنیم تا بتونیم استفاده کنیم
// اگر بخواهیم یک ارور در مواقعی داشته باشیم و استثنا داشته باشیم باید از throwing & exeption استفاده کنیم
const person ={
  fname : "saman" ,
  lname : "jebelli" ,
  get fullName(){
    return `${person.fname} ${person.lname}`
  },
  set fullName(value){
    const part = value.split(" ");
    if(typeof value !== "string"){
       //return
       throw new Error("value is not a string")
    };// اگه ریترن صدا زده بشه دیگه بقیه دستورات کار نمیکنن 
    // const e = new Error();
    // console.log(e);
    if(part.length !==2 ){
      throw new Error("enter a first & last name")
    }
    this.fname = part[0];
    this.lname = part [1];
  }
}
try{
    person.fullName= "samanjebelli" ;
}catch(e){
    // alert(e);
    console.log(e)
}//دیگه مثل قبلی ارور نشون نمیده و استثنا بوجود اوردیم
console.log(person);
////28taghir dadan this
// const video = {
//   title : "a" ,
//   tags : ["A" , "B" , "C"] ,
//   showTags(){
//     // const self = this ;
//     this.tags.forEach((tag)=>
//       console.log( this.title , tag)
//     );
//   }
// }
// video.showTags();
// function playVideo(){
//   console.log(this);
// }
//playVideo.apply({name:"saman"});
// apply & call mesl ham hastand 
// apply bayad dar chand argoman bashad vali call dar yek argoman mitone bashe
// const fn = playVideo.bind({name : "saman"});
// fn();
////29verasat
//shape -> baseclass & superclass & parentclass (از این آبجکت ارث بری میشود)
//circle , square -> drivedclass & subclass & childclass (آبجکت های فرزند میگویند وارث بری میکنند) 
// IS-A -> circle IS-A shape -> circle ers bari mikone
////30prototype
//object base reshe hame object ha hastand
