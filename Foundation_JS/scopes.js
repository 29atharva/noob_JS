// you can define variable by  three typw 'let', ' var', 'const'

// let and const have same scope -> Block scope
// var is global Scope;


var name = 'kavi' //global scope
function d(){
  var name = 'atharva'; //local scope
console.log(name);
}

function f(){
 let name = 'aka'; //local scope 
console.log(name);
}

function e(){
 name = 'ak'; //global scope // it has precedence it overide the "var name" with global scope
console.log(name);
}
f() //aka
e() //ak
d() //atharva
console.log(name) //ak because it has precedence otherwise kavi.
