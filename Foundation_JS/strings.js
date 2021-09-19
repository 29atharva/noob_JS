
/*
var myString = "name" // "name", `name`, 'name' this is how a string can be defined.

// "\" is used to read the written thing after as a string, \n is used to go to the new line.

// "``" backquotes give you multiline string.


// ".lenght" we can get a lenth of a string
console.log(myString.length)


//strings are immutable



//**************************************************************************************************************** */

const firstName = "Atharva";
const lastName = "kavishwar";
const fullName = firstName + " " + lastName; 
console.log(fullName)
console.log(firstName.length, lastName.length, fullName.length)

let initial = firstName[0] + lastName[0]

console.log(initial)

function init(firstName,lastName){
  return firstName[0] + lastName[0];
}
console.log(init(firstName,lastName))


function initi(fullName){
let linit = fullName.indexOf(" ") + 1
return fullName[0] + fullName[linit]
}
console.log(initi(fullName))
