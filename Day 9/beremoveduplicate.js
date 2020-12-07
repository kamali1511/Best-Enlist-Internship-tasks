/* Write a javascript prototype method named begetduplicate which extends array prototype, to find duplicate values from array irrespective of their datatypes */

Array.prototype.beremoveduplicate =function(){ 
   var dup=[];{
   dup.push(arr.filter((ele,indx)=>indx!==arr.indexOf(ele))) }
   return Array.from(new Set(dup));

}
var arr = [1,8,2,7,4,1];
arr.beremoveduplicate();