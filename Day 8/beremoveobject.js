/* Write a javascript prototype method named beremoveobject which extends Array prototype, to remove an object with its value from the array of objects */

Array.prototype.beaddObject = function(key, value) {
  this.map((object) =>{ if(object[key] == value){ 
     delete object[key];} 
  });
  return this;
}

var input = [
  {name: "John", age: 26,Country:"India"},
  {name: "Siva", age: 30,Country:"India"},
];

console.log(input.beremoveobject("Country", "India"));