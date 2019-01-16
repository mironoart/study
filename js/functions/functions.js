//!_________________________________________________________________________________________________
/* 
simple(); // Not defined!

//*Функциональное выражение  Function Expression
var simple = function (){
    var p = prompt('Test Prompt', 'Type Something Here!');
    console.log(p);
}
simple(); // OK 1
 */

//!_________________________________________________________________________________________________

/* 
simple(); // OK
//*Классическое выражение  Function Declaration  Основной поток
function simple(){
    var p = prompt('Test Prompt', 'Type Something Here!');
    console.log(p);
}
simple(); // OK
console.log(simple);
 */

//!___________________________________________________________________________________________________

function simple() {
  var p = confirm("Are you OK?");
  console.log(p);
  let i = "q";
  console.log(i);
  var j = "w";
  console.log(j);
}

var q = simple;
q = null;
simple(); // OK
simple = null;
var w = "hi!";
q(); //? Error Such function dont exists

//________________________________________________________________________________________________________-
/* 
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }

// Аннонимный вызов функций!
ask("Вы согласны?", 
    function() { alert("Вы согласились."); },
    function() { alert("Вы отменили выполнение."); }
);
 */

/* 
___________________________________________________________________________________________-_______________

    var sum = new Function('a,b', ' return a+b; ');

    var result = sum(1, 2);
    alert( result ); // 3

 */
