

var images = new Array();
var actualBigImage = 0;
var bigImage = document.querySelector("#bigimage");
var overlay = document.querySelector("#overlay");

var imgNumber = 0;
Array.prototype.forEach.call(document.querySelectorAll(".bild"), function( element ) {
    element.setAttribute("data-number", imgNumber++);
    var style = window.getComputedStyle(element, false);
    images.push( style.backgroundImage.slice( 4, -1).replace(/"/g,"") );

    element.addEventListener("click", function(){
        showOverlay( this );
    })
});

document.getElementById("closeOverlayButton").addEventListener('click', closeOverlay );

document.addEventListener('keydown', function(event){
    switch( event.keyCode ){
        case 32: case 39: // Leertaste, rechts
            actualBigImage++;
            break;
        case 37: // links
            actualBigImage--;
            break;
        case 27: // ESC
            closeOverlay();
            break;
        default:
            console.log(  event.keyCode);
    }

    if( actualBigImage === images.length ) actualBigImage = 0;
    if( actualBigImage === -1 ) actualBigImage = images.length - 1;

    showBigImage();
});

bigImage.addEventListener("click", function( event){
    actualBigImage++;

    actualBigImage %= images.length;
    showBigImage();
});

bigImage.addEventListener("dblclick", closeOverlay);

function showBigImage(){
    bigImage.setAttribute("src", images[ actualBigImage ]);
}

function closeOverlay(){
    overlay.setAttribute("style","display:none;");
}

function showOverlay( element ){
    actualBigImage = element.dataset.number;
    bigImage.setAttribute("src", images[ actualBigImage ]);
    overlay.setAttribute("style","display:block;");
}

// TODO: debugging icon for closing overlay , ( fontAwesome Icon is not be show )
