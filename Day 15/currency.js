/** Create a javascript prototype function to mask currency with comma as delimiter.
Example: if the input is 1000, the the output will be 1,000 **/

Number.prototype.format = function () {
   var num_parts = this.toString().split( /(?=(?:\d{3})+(?:\.|$))/g ).join( "," );
    return num_parts;
   };
var num = 1000;
num.format(); 