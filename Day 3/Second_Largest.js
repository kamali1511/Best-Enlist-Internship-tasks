/* Create a function that takes an array of numbers and returns the second largest number */

function Second_Largest(arr)
{
  arr.sort(function(x,y)
           {
           return x-y;
           });
  var val = [arr[0]];
  var result = [];
  
  for(var j=1; j < arr.length; j++)
  {
    if(arr[j-1] !== arr[j])
    {
      val.push(arr[j]);
    }
  }
    result.push(val[val.length-2]);
  return result;
  }

  console.log(Second_Largest([12,54,14,76,35]))