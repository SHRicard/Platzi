[];

var frutas = ["Manzana", "Platano", "Cereza", "Fresa"];

////////////////////Posicion de 0 a frutas.length
console.log(frutas["numero"]);
frutas[0] = "Manzana";
frutas[1] = "Platano";
frutas[2] = "Cereza";
frutas[3] = "Fresa";
console.log(frutas.length);
4;

//agrego elemento
var masFrutas = frutas.push("Banana");
var frutas = ["Manzana", "Platano", "Cereza", "Fresa", "Banana"];
console.log(frutas.length);
5;

///quito elemento
var menosFrutas = frutas.pop("Banana");
var frutas = ["Manzana", "Platano", "Cereza", "Fresa"];
console.log(frutas.length);
4;

//agregar al principio
var primeraFruta = frutas.unshift("Banana");
var frutas = ["Banana", "Manzana", "Platano", "Cereza", "Fresa"];
console.log(frutas.length);
5;

//borrar el primero
var borrarFruta = frutas.shift("Banana");
var frutas = ["Manzana", "Platano", "Cereza", "Fresa"];
console.log(frutas.length);
4;

/// indexOff

var posicion = frutas.indexOf("Cereza");
//////////////////0          1          2        3
var frutas = ["Manzana", "Platano", "Cereza", "Fresa"];
// posicion cereza = 2

//desckarativas

function miFunction() {}

//expresion
var miFunction = function () {};
