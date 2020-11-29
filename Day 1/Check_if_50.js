/* Write a javascript program to check two given numbers and return true if one of the number is 50 or if their sum is 50 */

function Check(num1, num2)
{
    return((num1==50||num2==50)||(num1+num2==50));
}

Check(50,50)
Check(50,25)
Check(27,28)
