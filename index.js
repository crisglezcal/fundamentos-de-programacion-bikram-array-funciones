//Arrays
let arrayVacio = [];
let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrayBidimensional = array [[0, 1, 2], ["a", "b", "c"]];

//Funciones
function suma (a, b) {
    return a + b;
}

function potenciacion (a, b){
    return a**b;
}

function separarPalabras (string) {
    return string.split("");
}
function repetirString (string, number) {
    let stringSuma;
    for (i=0; i<number; i++) {
        stringSuma += string
    }
    return stringSuma;
}

function esPrimo (number) {
    for (i=2; i<number/2; i++) {
        if (i % 2 === o) {
            return false
        } else {
            return true
        }
    }
}

//Funciones 
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

function multiplicacion (number) {
    if (number % 2 == 0) {
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

function sumarArray (numerosOrdenar){
    let sumados;
    for (let i=0; i<numerosOrdenar.length; i++) {
        sumados += numerosOrdenar[i];
    }    
    return sumados;
}

function multiplicarArray (numerosOrdenar){
    let multiplicados;
    for (let i=0; i<numerosOrdenar.length; i++) {
        multiplicados *= numerosOrdenar[i];
    }    
    return multiplicados;
}
