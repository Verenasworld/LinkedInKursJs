"use strict";

var ausgabe = document.getElementById("ausgabe");

var addieren = document.getElementById("addieren");
var subtrahieren = document.getElementById("subtrahieren");
var a= 3;
var b= 5;

eingabe.innerHTML = a + "und" + b;

addieren.addEventListener("click" , function()){
    rechne("+" ,a,b);
})

subtrahieren.addEventListener("click", subtrahieren);

function subtrahieren() {
    rechne("-",a, b);

}
function rechne( operator, x, y) {
    var ergebnis;
    if (operator == "+"){
        ergebnis = x + y ;
    }

}

