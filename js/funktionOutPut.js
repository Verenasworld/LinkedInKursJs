"use strict";

var ausgabe = document.getElementById("ausgabe");
var a= 3;
var b = 5;
var ergebnis;

ergebnis = a + b; ausgeben("Die Summe");
ergebnis = a - b; ausgeben("Die Differzenz");
ergebnis = a * b; ausgeben("Das Produkt");
ergebnis = a / b; ausgeben("Der Quotient");

function ausgeben(ergebnisName) {
    ausgabe.innerHTML += ergebnisName + " lautet " + ergebnis + ".<br/>";
}

ausgabe.innerHTML += "<hr/>"

ergebnis = addieren( a, b ); ausgeben("Das Ergebnis lautet: ");

function addieren( x, y ) {
    var z = x + y;
    return z;

}







