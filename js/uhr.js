var canvas = document.getElementById("uhr");
var context = canvas.getContext('2d');
var radius = (canvas.width / 2) -1;
var stundenRadians, minutenRadians, sekundenRadians;

var gradient = context.createLinearGradient(0,0,170,0);
 gradient.addColorStop("0", "lightcyan");
 gradient.addColorStop("0.5" ,"lightblue");
 gradient.addColorStop("1.0", "lightskyblue");


context.translate( canvas.width /2, canvas.height/ 2);

draw();
window.setInterval( draw, 1000);

function getTime() {
    var time = new Date();
    stundenRadians = (((time.getHours() %12) + time.getMinutes() / 60 ) * 30 - 90 ) *( Math.PI / 180 );
    minutenRadians = ( time.getMinutes() * 6 - 90 ) * (Math.PI / 180 );
    sekundenRadians = (time.getSeconds() * 6 - 90 ) * (Math.PI / 180 );


}

function  draw() {
    getTime();
    context.clearRect(-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);

// Ziffernblatt
    context.beginPath();
    context.lineWidth = 1;
    context.strokeStyle = 'black';
    context.fillStyle = gradient;
    context.arc( 0, 0, radius, 0, 2 * Math.PI);
    context.stroke();
    context.fill();


//Stunden
context.beginPath();
context.strokeStyle = "black";
context.lineWidth = 6;
context.rotate( stundenRadians);
context.moveTo(0,0);
context.lineTo(canvas.width / 2 - 60, 0 );
context.stroke();
context.rotate( -stundenRadians);

//Minuten

context.beginPath();
context.lineWidth = 3;
context.rotate( minutenRadians);
context.moveTo(0,0);
context.lineTo(canvas.width / 2 - 20, 0 );
context.stroke();
context.rotate( -minutenRadians);

//Sekunden

context.beginPath();
context.lineWidth = 1;
context.rotate( sekundenRadians);
context.moveTo(0,0);
context.lineTo(canvas.width / 2 - 10, 0 );
context.stroke();
context.rotate( -sekundenRadians );

}
