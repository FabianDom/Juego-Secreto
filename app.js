let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto () {
  let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
  console.log(numeroGenerado);
  console.log(listaNumerosSorteados);
  // se pone la condicion que si ya todos los numeros fueron sorteados termine el juego y no continue la recursividad.
  if( listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento('p', 'Ya se sortraron todos los numeros posibles')

  } else {
     // si el numero generado esta incluido en la lista 
    // metodo includes busca si el numero esta en la lista 
    if(listaNumerosSorteados.includes(numeroGenerado)) {
    // usamos recursividad si el numero secreto ya esta incluido en la lista volvemos a llamar a la funcion para generar otros hasta agregar los numeros en este caso hasta 10.
    return generarNumeroSecreto();

  } else {
    listaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado
  }
  }
 
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();