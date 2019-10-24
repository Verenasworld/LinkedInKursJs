Array.prototype.forEach.call(document.querySelectorAll(".read-more-link"),function (element) {
    element.addEventListener("click", function (event) {
        event.preventDefault();
        let element = event.currentTarget;
        let nummer = element.getAttribute("data-nummer");

        if (element.getAttribute("data-modus") == "verbergen"){
            document.getElementById("lang" + nummer).setAttribute("style","display:none");
            element.innerHTML = "weiterlesen";
            element.setAttribute("data-modus","anzeigen");

        }
        else {
            document.getElementById("lang" + nummer ).setAttribute("style" ,"display:none");
            element.innerHTML = "verbergen";
            element.setAttribute("data-modus", "verbergen");
        }

    })

});


