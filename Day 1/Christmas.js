/* Write a javascript program to calculate days left until next christmas */

today=new Date();
var Christmas=new Date(today.getFullYear(), 11, 25);
if (today.getMonth()==11 && today.getDate()>25) 
{
Christmas.setFullYear(Christmas.getFullYear()+1); 
}  
var one_day=1000*60*60*24;
console.log(Math.ceil((Christmas.getTime()-today.getTime())/(one_day))+
" days left until Christmas!");
