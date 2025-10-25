// let value;

 // console.log(document.location);
 // value = document.location.hostname;

 //value = document.characterSet;
 //value = document.title;
 //value=document.links;
 //value=document.designMode;
 //value= document.links.item(4);
// console.log(value);

const todo = document.querySelector(".list-group-item");
const todolist = document.querySelector(".list-group");
const card = document.querySelector(".card");


let value;

//anneden çocuklara erişmek
// value = todolist.children[0];
// value = todolist.children[1];


// value = Array.from(todolist.children);

// value.forEach(function(todo){
//     console.log(todo.textContent);
// })


value = todo;
value = todo.parentElement.parentElement;

console.log(value);