document.addEventListener('DOMContentLoaded', function() {
    let buttonDiv = document.getElementById("button");
    let button = buttonDiv.querySelector("button");


    buttonDiv.addEventListener('click', function() {
        alert('Hola! Soy el div');
    });


    button.addEventListener('click', function(eventoboton) {
        eventoboton.stopPropagation();
        alert('Hola! Soy el botón');
    });
});