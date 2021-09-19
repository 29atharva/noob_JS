/*
Create a new empty array named todoDB and write below functions:
addTodo(item, priority) - Adds a new todo item to the end of the list depending on the priority. If the priority is 'high' then the item is added at the start of the todo array else at the last.
clearTodo(index) - Sets the item at the given index to null
updateTodo(index, newItem) - Updates the item at the given index with newItem passed to the function.
getTodo(index) - returns the todo item at given index else full list of todos if nothing is passed.

*/

let todoDb=[]

function addTodo(item, priority){
  if(priority==="high") {
    todoDb.unshift(item)
  } else {
    todoDb.push(item)
  }
}

function clearTodo(index) {
  todoDb[index]=null
}

function updateTodo(index,item){
  todoDb[index]=item
}

function getTodo(index){
   return todoDb[index]
}
