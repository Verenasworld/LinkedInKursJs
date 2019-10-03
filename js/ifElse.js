"use strict";
var ausgabe = document.getElementById("ausgabe");
        rechne("+", 3, 5);
        rechne("-", 7, 3);
        rechne("*", 8, 3);

        function rechne( operator, x, y) {
            var ergebnis;

            if ( operator == "+"){
                ergebnis = x + y;

            }

            if ( operator == "-"){
                ergebnis = x - y;
            }
            if ( operator == "*"){
                ergebnis = x * y;
            }

           if ( operator == "+" || operator == "-" || operator == "*"){
               console.log("alles klar.")}
           else {

               alert(" es sind nur + und - erlaubt");
            }

         ausgabe.innerHTML += x + operator + y + " = " + ergebnis + "<br/>"

        }
