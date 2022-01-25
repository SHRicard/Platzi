var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludar(estudiantes) {
  console.log(`Hola, Buen Dia ${estudiantes}`);
}

//siclo for  o bucle for
for (var i = 0; i < estudiantes.length; i++) {
  saludar(estudiantes[i]);
  ////// funcion mas array en posicion i
}

//siclo For Of   o bucle For Of
//////  1 estudiante  del array de estudiantes
for (var estudiante of estudiantes) {
  /////////// index 0        array.length
  //funcion mas 1 estudiante
  saludar(estudiante);
}

//siclo while o bucle while
var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];
function saludar(estudiantes) {
  console.log(`Hola, Buen Dia ${estudiantes}`);
}

//mientra el array sea mayor a 0
while (estudiantes.length > 0) {
  //el while se ejecuta con el metodo shift sacando
  //1 estudiante y guardandolo a mi varible estudiante
  var estudiante = estudiantes.shift();

  saludar(estudiante);
}
