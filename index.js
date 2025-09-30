//Arrays
let arrayVacio = [];
let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrayNumerosPares = [0, 2, 4, 6, 8];
let arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']];

//Funciones
function suma (a, b) {
    return a + b;
}

function potenciacion (a, b){
    return a**b;
}

function separarPalabras (string) {
    return string.split(" ");
}

function repetirString(string, number) {
    let stringSuma = '';
    for (let i = 0; i < number; i++) {
        stringSuma += string;
    }
    return stringSuma;
}

function esPrimo(number) {
    for (let i = 2; i < number/2; i++) {
        if (number % i === 0) {
            return false;
        }
    }  
    return true;
 } 

//Arrays y funciones
numeros = [4, 5, 7, 2, 3, 1, 9, 8, 6];
function ordenarArray (numeros) {
    return numeros.sort(function (a,b) {
        return a-b});
};

function obtenerPares (numeros) {
    return numeros.filter ((number) => number % 2 === 0);
}

function pintarArray (array) {
    let resultado = array[0].toString();
    for (let i=1; i<array.length; i++) {
        resultado += ", " + array[i].toString();
    }
    return "[" + resultado + "]";

    pintarArray([0, 1, 2]);
}

function arrayMapi (array, funcion) {
    let arrayFuncion = [];
    for (let i=0; i<array.length; i++) {
        arrayFuncion[i] = funcion(array[i]);
    }
    return arrayFuncion;
}

function eliminarDuplicados (array) {
    let arraySinDuplicados = [];
    for (let i=0; i<array.length; i++){
        if (!arraySinDuplicados.includes(array[i])){
            arraySinDuplicados.push(array[i]);
        }
    }
    return arraySinDuplicados;
}

//Iteraciones proyecto
//Arrays
let arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];
let holaMundo = ["Hola", "Mundo"];
let loGuardoTodo = ["hola", "que", 23, 42.33, "tal"];
let arrayDeArrays = [[756, "nombre"], [225, "apellido"], [298, "direccion"]];

//Funciones
function multiplicacion (number1, number2) {
    return number1*number2;
}

function division (number1, number2) {
    return number1/number2;
}

function esPar (number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function suma (a, b) {
    return a+b;
}

function resta (a, b) {
    return a-b;
}

function multiplicacion (a, b) {
    return a*b;
}

let arrayFunciones = [suma, resta, multiplicacion];

//Mezclando arrays y funciones
let numerosOrdenar = [2, 3, 6, 7, 4, 9, 8];

function ordenarArray2 (numerosOrdenar) {
    return numerosOrdenar.sort(function (a, b) {
        return b-a;
    });
}

function obtenerImpares (numerosOrdenar) {
    return numerosOrdenar.filter((number) => number % 2 !== 0);
}

let numeros1 = [1, 2, 3, 4, 5]
function sumarArray (numeros1){
    let sumados = 0;
    for (let i=0; i<numeros1.length; i++) {
        sumados += numeros1[i];
    }    
    return sumados;
}

function multiplicarArray (numeros1){
    let multiplicados = 1;
    for (let i=0; i<numeros1.length; i++) {
        multiplicados *= numeros1[i];
    }    
    return multiplicados;
}
