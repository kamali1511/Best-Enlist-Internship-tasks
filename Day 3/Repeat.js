/* Create a javascript function that takes an integer and returns whether it's a repeated one or not. Print true if it's repeated else print false */

function Repeat(num)
{
    ones = Math.round(num%10)
    num = num/10
    tens = Math.round(num%10)
    
    if(ones==tens)
        return true
    else
        return false
}

Repeat(3443)
Repeat(3434)
Repeat(2344)