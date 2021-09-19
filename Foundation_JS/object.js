"use strict"
const hello=function(){
  console.log("hello")
}

var h
const obj= {
  "atharva":"name",
  3:"8",
  true:"y",
  [h]:"atharva",
  "anshul":{
    greet:function(){
      console.log("hello")
    }
  },
  hi:function(){
    console.log("hi")
  }
}

// obj["atharva"].greet()
// // or 
// obj.atharva.greet()
// // or 
// obj["atharva"]["greet"]()

obj[true]="9"
console.log(obj.hi.toString())
