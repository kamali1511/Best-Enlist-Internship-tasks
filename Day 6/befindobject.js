/* Write a javascript prototype method named "befindobject", which finds a specific object from array of objects, it should extend array prototype */

Array.prototype.befindobject = function() {
 var user=[];
   for(var i=0;i<sampleinput.length;i++){
    user[i]= sampleinput[i].name;
   }
 console.log(user);
};

var sampleinput =[
  {name: "Preethi",age:25},
  {name: "Divya",age:26}
];
sampleinput.befindobject(name);
