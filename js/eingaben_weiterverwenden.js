"use strict";

var ausgabe = document.getElementById("ausgabe");
var addieren = document.getElementById("addieren");
var a;
var b;

addieren.addEventListener("click", function () {
    holeeingabe();
    rechne ("+", a,b);

})

document.getElementById("subtrahieren").addEventListener("click",subtrahieren);
function subtrahieren() {
    holeeingabe();
    rechne("-", a,b);

}

function holeeingabe() {
    a = document.getElementById("zahl1").value * 1;
    b = document.getElementById("zahl2").value * 1;

}



function rechne( operator, x, y ) {
    var ergebnis;
    var rechenoperation;
    if ( operator == "+"){
        ergebnis = x + y;
        rechenoperation = "Addition";
    }
    if ( operator == "-"){
        ergebnis = x - y;
        rechenoperation = "Subtraktion";
    }
ausgabe.innerHTML = x + operator + y + " = " + ergebnis + "<br/>";
}
