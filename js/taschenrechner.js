var key_panel = document.getElementsByClassName("key_panel");
var display = document.getElementsByClassName("display");
var zahl1 = 0, zahl2 = null;
var operator = "";
var aktuelleZahl = 1;

createCalculator();
function createCalculator() {
    createButton ( 7 );
    createButton ( 8 );
    createButton ( 9 );
    createButton ( "+" );


    createButton ( 4 );
    createButton ( 5 );
    createButton ( 6 );
    createButton ( "-" );

    createButton ( 1 );
    createButton ( 2 );
    createButton ( 3 );
    createButton ( "*" );

    createButton ( 0 );
    createButton ( "C" );
    createButton ( "=" );
    createButton ( "/" );

}

function createButton( zahl) {
    var btn = document.createElement( "BUTTON");
    btn.value = zahl;
    var t = document.createTextNode( zahl);
    btn.appendChild(t);
    key_panel.appendChild(btn);

}

btn.addEventListener( "click", function () {
    if (this.value == "+"||
        this.value == "-"||
        this.value == "*"||
        this.value == "/" ){
        operator = this.value;
        aktuelleZahl = 2;
        zeigen();
        return;

    }
    if (this.value == "=" ){
        rechne();
        zeigen();
        return;
    }

    if (this.value == "C"){
        zahl1 = null;
        zahl2 = null;
        operator = "";
        aktuelleZahl = 1;
        zeigen();
        return;
    }

    if (aktuelleZahl == 1){
        zahl1 = (zahl1 * 10) + ( 1 * this.value );
    }
    if (aktuelleZahl == 2){
        zahl2 = ( zahl2 * 10) + ( 1 * this.value);
    }
    zeigen();

})

function zeigen(){
    if ( zahl1 == null){
        display.innerHTML = "&nbsp";

    }
    else{
        display.innerHTML = zahl1 + "" + operator;
    }
    if (zahl2 != null){
        display.innerHTML += zahl2;
    }
}

function rechne() {
    switch (operator) {
        case "+":
            zahl1 = zahl1 + zahl2;
            break
        case "-":
            zahl1 = zahl1 - zahl2;
            break
        case "*":
            zahl1 = zahl1 * zahl2;
            break
        case "/":
            zahl1 = zahl1 / zahl2;
            break
    }
    zahl2 = null;
    operator = "";
    aktuelleZahl=1;

}
