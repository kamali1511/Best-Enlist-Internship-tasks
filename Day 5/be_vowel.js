/* Write a javascript prototype method named "bevowel" which extends string to find all vowels in the input string */

function gettingInputString(){
	this.input = '';
}

const input = new gettingInputString();

gettingInputString.prototype.bevowel= function (input){
	const array = input.split('');
	console.log(array);
	const output=[];
	for(let i=0; i<array.length;i++){
		if((array[i]==='a')|| (array[i]==='e')|| (array[i]==='i')|| (array[i]==='o')|| (array[i]==='u')){
			output.push(array[i]);
		}
	}
	return output.join('');
}	
input.bevowel("kamali"); 