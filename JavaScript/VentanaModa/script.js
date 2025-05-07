const modal = document.querySelector("#modal");
const imagen = document.querySelector("#imagen");
const imagenes = document.querySelector("#imagenes");
function abrir(){
    modal.showModal();
}
function cerrar(){
    modal.close();
}

function masGrande(){
    imagenes.showModal();
}
function menosGrande(){
    imagenes.close();
}