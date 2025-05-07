
const boton = document.getElementById("btn-ver").addEventListener("click", verDesplegable);


function verDesplegable(){

    const div = document.querySelector(".acordeon-show");
    div.classList.toggle("active");


}