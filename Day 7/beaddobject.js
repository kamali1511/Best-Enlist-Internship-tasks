/* Write a javascript prototype method named beaddobject which extends Array prototype, to assign an object with its value to the array of objects */


var Input = [
	{
		name:"Preethi",
		age:25,
	},
	{
		name:"Divya",
		age:26,
	}
];
Array.prototype.beAddObject = function (input){
Input.forEach((item,i) =>{
	item.Dept = input;
})
return(sampleInput);
}
sampleInput.beAddObject("Chemical");
