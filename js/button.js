"use strict";

var ausgabe = document.getElementById("ausgabe");
var addieren = document.getElementById("addieren");
var substrahieren = document.getElementById("subtrahieren");
var a= 8;
var b= 5;
eingabe.innerHTML = a + " und " + b;



addieren.addEventListener("click" , function(){
    rechne("+" ,a,b);
});

substrahieren.addEventListener("click",subtrahieren);

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




