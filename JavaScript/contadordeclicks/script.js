let numero = 0;


let contador = document.getElementById("contador");
let botonSumar = document.getElementById("btnSumar");
let botonReinicio = document.getElementById("btnReiniciar")

contador.textContent = numero;

botonSumar.addEventListener("click", botonMasFuncion)
botonReinicio.addEventListener("click", reinicio)

function botonMasFuncion(){
    numero++;
    contador.textContent= numero;
}

function reinicio(){
    numero = 0;
    contador.textContent = numero;
}


