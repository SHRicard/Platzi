//¿Qué es una variable y para qué sirve?
//es una palabra clave que sirve para resevar un espacio en memoria

//¿Cuál es la diferencia entre declarar e inicializar una variable?
// la diferencia entre declarar e inicializar una variable
//es que una no tiene un valor asignado y el otro si

//¿Cuál es la diferencia entre sumar números y concatenar strings?
// la diferencia es que solo se puede sumar  numero que sean del mismo tipo
//de dato ejemplo 5 + 5 = 10. esto es suma
// a diferencia de 5 + "5" = "55" esto es concatenar ya que son 2 tipo de la variable
//dato diferente uno es string y otro es numero

//¿Cuál operador me permite sumar o concatenar?
// el operado de + funciona para ambos caso solo hay q ver el dato

// 2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

// Nombre = string
// Apellido = string
// Nombre de usuario en Platzi = string
// Edad = numero
// Correo electrónico = string
// Mayor de edad = booleano
// Dinero ahorrado = numero
// Deudas = numero

var persona = {
  Nombre: "Ricardo",
  Apellido: "Ramirez",
  NombreDeUsuarioEnPlatzi: "RicardoPlatzi",
  Edad: 30,
  CorreoElectrónico: "Ricardo@hotmail.com",
  MayorDeEdad: Boolean,
  DineroAhorrado: 5000,
  Deudas: 4001,
  nombreCompleto: function () {
    console.log(`Mi nombre completo es ${this.Nombre} ${this.Apellido}`);
  },
};

function nombreCompletoV2(a, b) {
  return (union = `Mi nombre completo es ${a} ${b}`);
}

function dineroReal(a, b) {
  return (resultado = a - b);
}
dineroReal(persona.DineroAhorrado, persona.Deudas);
//999

//¿Qué es una función?
//es un conjunto de intruciones a realizar

//¿Cuándo me sirve usar una función en mi código?
// cuanto hay tareas repetitivas

//¿Cuál es la diferencia entre parámetros y argumentos de una función?
// un parametro es un propiedad ya definida en la funcion ejemplo a + b
// a , b son parametro que necesita la funcion para realizar dicha tarea
// y los argumento son los valores dados actuamente ejemplo a = 10 , b = 10
//a + b = c    c = 20

//2️⃣ Convierte el siguiente código en una función
//, pero, cambiando cuando sea necesario
//las variables constantes por parámetros y argumentos en una función:

const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log(
  "Mi nombre es " +
    completeName +
    ", pero prefiero que me digas " +
    nickname +
    "."
);

function persona(name, lastname, nickname) {
  var completeName = name + lastname;
  console.log(
    "Mi nombre es " +
      completeName +
      ", pero prefiero que me digas " +
      nickname +
      "."
  );
}
