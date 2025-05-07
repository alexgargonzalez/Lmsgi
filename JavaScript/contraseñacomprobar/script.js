const input = document.getElementById("passwd");
const boton = document.getElementById("btn");
const parrafo = document.getElementById("texto");

boton.addEventListener("click", comprobar);

function comprobar(){
    const tamaño = input.value;
    if(tamaño.length < 12){
        parrafo.innerHTML = "Insegura";
    }else{
        parrafo.innerHTML = "Segura huevos";
    }
}