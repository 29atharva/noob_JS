//Template literals are literals delimited with backticks ( ` ), allowing embedded expressions called substitutions

let name = 'atharva'
let last = 'kavishwar'
let age = 26

console.log(`hi ${name} ${last} you are ${age}`)
//template strings (`${}`)
/*************************************************************************************/
//Multi-line strings

console.log(`hey 
bro`);
// "hey
// bro"

/****************************************************************************************/

//Expression interpolation

let a = 5;
let b = 10;
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);
// "Fifteen is 15 and
// not 20."
