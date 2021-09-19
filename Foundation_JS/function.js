//a is not accsessible here
function add(a,b){  // prarameter
// a is accesible here.
  return a+b
}

let sum= add(2,3) // arguments
console.log(sum)

let sum1 = add('a','b')
console.log(sum1)

let sum2 = add('a', 1)
console.log(sum2)

let sum3 = add(true,false)
console.log(sum3)

//prarameter - a and b are parameters. 
//argument - 2 and 3 are arguments 

//activity with a switch

function getGreekString(val){
switch(val){
  case 1:
  case "a":
  case 'A':
  return "alpha";
  case 2:
  case "b":
  case 'B':
  return "beta";
  case 3:
  case "c":
  case 'C':
  return "gamma";
  case 4:
  case "d":
  case 'D':
  return "Delta";
}
return null
}

console.log(getGreekString(2))
