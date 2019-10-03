"use strict";
var ausgabe = document.getElementById("ausgabe");
        rechne("+", 3, 5);
        rechne("-", 7, 3);

        function rechne( operator, x, y) {
            var ergebnis;

            if ( operator == "+"){
                ergebnis = x + y;

            }

            if ( operator == "-"){
                ergebnis = x - y;
            }

            ausgabe.innerHTML += x + operator + y + " = " + ergebnis + "<br/>";

        }
