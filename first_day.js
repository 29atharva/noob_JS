console.log("Hello world!");

console.log(2+2);

console.log(5*15);

console.log(10%2);

console.log(19-29);

console.log('Hello '+'world');

console.log(3+10*2);

console.log((3+10)*2);


d=100;
console.log(d);

let pet = 'dog';
pet= 'cat'; 
console.log(pet);

//Hoisting : the default behavior of moving all the declarations at the top of the scope before code execution. var can be hoisted

var greet;
console.log(greet); //undifined

greet= 'hi';
console.log(greet); // hi

greet = 'hello';

console.log(greet); //hello

//***************************************//

//"const" and "let" are never Hoisted. 


let greeting = 'say hi';
console.log(greeting);

//let greeting = 'say hello';
//console.log(greeting);


//const greeting = 'say hi';
//console.log(greeting);

//const greeting ="say Hello";

//console.log(greeting)


//Interview Question on var, let and const is always asked

//*********************************************** */
//logical operators
// "==" and "==="


let a = '10';
let b = '20';

console.log(a === b);
console.log(a >= b);

console.log(a <= b);
console.log(a == b);
//console.log(a = b);

console.log(a <= b || a==b); // OR operator '||'
console.log(a >= b && a==b); // AND operator "&&"
