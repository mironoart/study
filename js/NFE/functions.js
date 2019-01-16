//?  NFE - Named Function Expression
/* 
function(){
    alert('hi');
}  //not works
 */

//alert(function(){return "Hi!"}) //? alerts  function(){return "Hi!"}
/* 
var p = function(){
    return "hi";
}
alert (p); //? alerts  function(){return "Hi!"}
alert(p()); //? alerts Hi! 
*/



//?  NFE - Named Function Expression
/* 
var f = function local(param){
    alert(local);
}
 */

//* Факториал рекурсией без NFE
/* 
function f(n){
    return n ? n*f(n-1) : 1;
}
alert(f(5)) // 120
var g = f;
f = null;
alert( g(5) ); //? error function not defined!
 */

//* Факториал рекурсией с NFE

var f = function factorial(n) {
    return n ? n*factorial(n-1) : 1;
  };
var g = f;  // скопировали ссылку на функцию-факториал в g
f = null;
alert( g(5) ); //? 120, работает!