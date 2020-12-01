/* Write a javascript prototype method named "bespacify" which extends strings to allow spaces between each character of an input string */

function GettingInputString(){
	this.input = '';
}

const input = new GettingInputString();

GettingInputString.prototype.bespacify = function (input){
	const array=[];
	const char = input.split('');
	char.forEach((i)=>{
		i = i+ ' ';
		array.push(i);
	});
	return (array.join(''));
}

input.bespacify("BESTENLIST"); 