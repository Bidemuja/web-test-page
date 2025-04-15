
//JQuery
$(document).ready(function () {
    $('#btn-color').click(function () {

        $('#div1').css({
            'background-color': '#4CAF50',   // Cambia el color de fondo
            'color': '#FFFFFF'               // Cambia el color del texto
        });
    });
});

//JS
function changeColor() {
    var div = document.getElementById("div1");
    div.setAttribute("style", "background-color: grey; color: white;");
}
