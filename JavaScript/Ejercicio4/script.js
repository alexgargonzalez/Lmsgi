const capa = document.getElementById("capa");
const btnRojo = document.getElementById("btn-rojo");
const btnVerde = document.getElementById("btn-verde");
const btnAmarillo = document.getElementById("btn-amarillo");
btnRojo.addEventListener("click", rojo);
btnVerde.addEventListener("click", verde);
btnAmarillo.addEventListener("click", amarillo);


function rojo(){
    capa.style.background = "red";
}
function verde(){
    capa.style.background = "green";
}
function amarillo(){
    capa.style.background = "yellow";
}