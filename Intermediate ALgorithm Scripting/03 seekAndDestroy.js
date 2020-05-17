function destroyer(arr) {
    var args = Array.prototype.slice.call(arguments);
   var arrx = args[0];
   for(var i=1;i<args.length;i++){
   while(arrx.indexOf(args[i]) != -1){
     arrx.splice(arrx.indexOf(args[i]),1);
     }
   }
   return arrx;
 }
 
 destroyer([1, 2, 3, 1, 2, 3], 2, 3);
 