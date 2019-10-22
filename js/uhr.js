var canvas = document.getElementById("uhr");
var context = canvas.getContext('2d');
var radius = (canvas.width / 2) -1;
var stundenRadians, minutenRadians, sekundenRadians;

context.translate( canvas.width /2, canvas.height/ 2);

draw();
window.setInterval( draw, 1000);
