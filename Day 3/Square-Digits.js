/* Create a function that squares every digit of a number*/

function squareDigits(num){
  var numString = num.toString(), result = [];

  for(var i = 0; i < numString.length; i++) {
    result[i] = Math.pow(numString[i], 2);
  }

  return Number(result.join(''));
}

Square(3345)