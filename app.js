// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Lista de los nombres de los amigos
let nombresAmigosSecretos = [];

//Esta funcion agrega los amigos a la lista designada anteriormente
function agregarAmigo() {
    //El .value es muy importante para obtener el valor 
    // que esta entrando en el input ya que solo necesitamos eso
    let nombre = document.getElementById('amigo').value;
    //Siempre que se vaya a comparar un null se debe usar el triple igual
    if (nombre != '') {
        nombresAmigosSecretos.push(nombre);
        mostrarListaAmigos();
        limpiarCampo();
    } else {
        alert("por favor, inserte un nombre");
    }
    return;
}

//Funcion de limpiar el campo con el fin de facilidad y estetica
function limpiarCampo() {
    let campo = document.querySelector('#amigo').value = '';
}
//Funcion que recorre la lista de amigos y los añade al Li de HTML
function mostrarListaAmigos() {
    return nombresAmigosSecretos.forEach(nombre => {
        let lista = document.createElement('li');
        document.querySelector('#listaAmigos').appendChild(lista);
        lista.innerHTML = nombre;
    });
}