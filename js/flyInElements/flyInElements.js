var intervalle = new Array();
var i = 0;


Array.prototype.forEach.call(document.querySelectorAll(".motivation"), function (element) {
    let mywidth = 50 - (i * 10);
    element.setAttribute("style", "width: " + mywidth + %);
    element.setAttribute("data-i", i );
    element.setAttribute("data-width", mywidth);
    i++;
    
});

window.addEventListener("scroll", function (e) {


})

