"use strict";

var ausgabe = document.getElementById("ausgabe");
var addieren = document.getElementById("addieren");
var substrahieren = document.getElementById("subtrahieren");
var a= ;
var b= ;
eingabe.innerHTML = a + " und " + b;



addieren.addEventListener("mouseover" , function(){
    rechne("+" ,a,b);
});

substrahieren.addEventListener("mouseover",subtrahieren);

function subtrahieren() {
    rechne("-",a,b);
}

function rechne( operator, x, y) {
    var ergebnis;
    if (operator == "+") {
        ergebnis = x + y;
    }
        if (operator == "-"){
            ergebnis = x - y;
        }
        ausgabe.innerHTML = x + operator + y + "=" + ergebnis + "<br/>";
}




