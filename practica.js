let listaGenerica = [];

let listaNumeros = [1,2,3,4,5];

let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin','Python'];

lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');


function verLenguajesDeProgramacion () {
    console.log(lenguagesDeProgramacion);
}



function invertirLenguajes () {
 console.log(lenguagesDeProgramacion.reverse());
 
}
invertirLenguajes();

//promedioLista()
function promedioLista () {
    let sumaNumeros = 0;
    for (let i = 0; i < listaNumeros.length; i++) {
        sumaNumeros = sumaNumeros + listaNumeros[i];
       
    }
    let promedio = sumaNumeros / listaNumeros.length
    console.log(sumaNumeros)
    console.log(promedio)
    return promedio

}

//numeroMaxMin()
function numeroMaxMin () {
    let numeroMAyor =listaNumeros[0];
    let numeroMenor =listaNumeros[0];
    for (let i = 0; i < listaNumeros.length; i++) {
       if (listaNumeros[i] > numeroMAyor) {
        numeroMAyor = listaNumeros[i];
       }
       if (listaNumeros[i] < numeroMenor) {
        numeroMenor = listaNumeros[i];
       }
        
    }
    console.log(numeroMAyor)
    console.log(numeroMenor)
}

//Suma numeros lista
function sumaNumeros (numero) {
    let suma = 0;
    for (let i = 0; i < numero.length; i++) {
        suma = suma + numero[i];     
    }
     return console.log(suma)
}
sumaNumeros([1,2,3,4,5])

//Posicion elemento de una lista

function posicionLista (lista, elemento) {
    for (let i = 0; i < lista.length; i++) {

        if (elemento == lista[i]) {
            // i sera la posicion (indice) en cada iteracion dela lista
         return i
        } 
        } 
        return -1
        
        
        
    }


console.log(posicionLista([1,2,3,4,5], 5))

// Suma de dos listas 

function sumaListas (lista1, lista2) {
    let suma = [];
    for (let i = 0; i < lista1.length; i++) {
            suma[i] = lista1[i] + lista2[i]
            
        }
        return suma
    }
    

console.log(sumaListas([1,2,3,4,5], [1,2,3,4,5]))


// devolver el cuadrado de cada elemento de la lista

function cuadradoLista (lista) {
    let cuadradoNumero = [];
    for (let i = 0; i < lista.length; i++) {
        cuadradoNumero.push(lista[i] **2) 
    }
    return cuadradoNumero

}
console.log(cuadradoLista([1,2,3,4,5]))