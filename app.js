// modificando html atrevez de java script
/* let titulo = document.querySelector("h1");
titulo.innerHTML = "Juego del número secreto"; */

/*
let parrafo = document.querySelector("p");
parrafo.innerHTML = "Indica un número del 1 al 10";
*/

// como se usa una variable no se usa las comillas
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
console.log (numeroSecreto);



function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
return;
}
// esta funcion es la que sera llamada a html, { } la llaves encapsulan la función que se quiere realizar
// parseint para forzar al string que se number 
// typeof para ver si es string o number el valor ingresado
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'} `);
        document.getElementById('reiniciar'). removeAttribute('disabled'); 
    } else{
        // El usuario no acertó
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor')
        } else{
            asignarTextoElemento('p', 'El número secreto es mayor')
        }

        intentos++;
        limpiarCaja();
    }
 return; 
}
    function limpiarCaja() {
         document.querySelector('#valorUsuario').value = ''; 
        
        }


    function generarNumeroSecreto(){
        let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

        console.log(numeroGenerado);
        console.log(numeroSecreto);
        // si ya sorteamos todos los números
        if (listaNumerosSorteados.length == numeroMaximo){

        } else{

        

        // si el número generado esta incluido en la lista, hacemos una operación, ó hacemos otra
        if ( listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }

    }
 }
// control + f para buscar un valor
    function condicionesIniciales (){
    asignarTextoElemento("h1", "juego del número secreo ");
    asignarTextoElemento("p", `Ingresa un número del 1 al ${numeroMaximo} `);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    }

    function reiniciarJuego(){
        //limpiar caja
        limpiarCaja ();
        // Indicar mensaje de intervalos de números
        // Generar el número aleatorio
        // Inicializar el número intentos 
        condicionesIniciales ();
        // Deshabilitar el botón de nuevo juego ( antes de esto el botón se quedaba activo, luego de esto se desactiva al reiniciar el juego)
        document.querySelector('#reiniciar').setAttribute('disabled', 'true');

    }

    condicionesIniciales();
// esto es para llamar a la función, en un punto donde este fuera del bloque "{ }"
// javascript leer primera las funciones, puede ser definida arriba o abajo de nuestro codigo
