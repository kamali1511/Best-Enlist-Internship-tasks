/* Write a javascript program to find the sign of product of user given 3 numbers */

/** Eg. assume getsign is your method name)
 getsign(1,2,-7) -> alert - sign
 getsign(1,+2,-7) -> alert both + and - sign
 getsign(1,2,7) -> alert welcome message **/

function getsign(str1,str2,str3){
var count=0,max=0;
if(str1[0]=="+")
{
  alert("+ sign!");
  count=1;
}
else if(str1[0]=="-")
{
  alert("- sign!");
  max=1;
}
if(str2[0]=="+" && count!=1)
 {
   alert("+ sign!");
    count=1;
 }

else if(str2[0]=="-"&& max!=1){
     alert("- sign!");
      max=1;
  }
if(str3[0]=="+" && count!=1)
 {
   alert("+ sign!");
    count=1;
 }

else if(str3[0]=="-" && max!=1){
     alert("- sign!");
      max=1;
  }
if(count==0 && max==0)
{
  alert("welcome!");
}
}

getsign('1','2','-7')
getsign('1','+2','-7')
getsign('1','2','7')