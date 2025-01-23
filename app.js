// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Lista de los nombres de los amigos
let nombresAmigosSecretos = [];
//Esta funcion agrega los amigos a la lista designada anteriormente
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
//Funcion para agregar un amigo a nuestro array
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
    /*
    En esta parte del codigo estamos estableciendo una cadena vacia para que la lista no se imprima
    una y otra vez, formando un ciclo sin fin cuando añadamos los nombres
    Ejemplo:
    Añado juan y roberto
    imprime juan y roberto
    añado maria
    imprime juan, roberto y maria, y asi sucesivamente
    */
    let listaA = document.querySelector('#listaAmigos');
    listaA.innerHTML="";
    /*Para recorrer de manera mas facil un arreglo, usamos directamente el foreach
    el cual nos ayuda a buscar en cada uno de los elementos de una mnaera mas facil
    lo que hacemos basicamente es crear elementos li para despues insertarlos en este elemento HTML con el .appendchild
    despues de eso lo imprime directamente en la pantalla
    */
    return nombresAmigosSecretos.forEach(nombre => {
        let lista = document.createElement('li');
        document.querySelector('#listaAmigos').appendChild(lista);
        lista.innerHTML = nombre;
    });
}
//Funcion para generar un numero aleatorio o en este caso un amigo aleatorio
function generarIndiceAleatorio(){
    return amigoRandom = Math.floor(Math.random()*nombresAmigosSecretos.length)+1;
}
//funcion para sortear un amigo y retornar cual fue el elegido
function sortearAmigo(){
    //comprobamos que la lista no este vacia
    if(nombresAmigosSecretos.length === 0){
        asignarTextoElemento('#resultado',"Lista vacia");
    }else{
        //Al generar un numero aleatorio este lo debe asociar con uno de los nombres de la lista, por ende, procedemos a retornarlo
        let indice = generarIndiceAleatorio();
        let amigo = nombresAmigosSecretos[indice];
        asignarTextoElemento('#resultado',`Tu amigo secreto es: ${amigo}`);
        //Deshabilitamos el boton para que solo se pueda sortear una vez el amigo
        document.querySelector('#sorteo').setAttribute('disabled', true);
    }
    return;
}
