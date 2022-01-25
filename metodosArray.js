var articulo = [
  { nombre: "bici", costo: 3000 },
  { nombre: "Tv", costo: 2500 },
  { nombre: "Libro", costo: 320 },
  { nombre: "celular", costo: 10000 },
  { nombre: "Laptop", costo: 20000 },
  { nombre: "Teclado", costo: 500 },
  { nombre: "Audifonos", costo: 1700 },
];

//Metodo Filter

var articulosFiltrados = articulo.filter(function (articulo) {
  return articulo.costo <= 500;
});

//articulosFiltrados retorna
// nombre: "Libro",costo: 320
// nombre: "Teclado",costo: 500

//Metodo Map
var nombreArticulos = articulo.map(function (articulo) {
  return articulo.nombre;
});

// nombreArticulos retorna
// nombre: "bici"
// nombre: "Tv"
// nombre: "Libro"
// nombre: "celular"
// nombre: "Laptop"
// nombre: "Teclado"
// nombre: "Audifonos"

///////Metodo find()
var articulo = [
  { nombre: "bici", costo: 3000 },
  { nombre: "Tv", costo: 2500 },
  { nombre: "Libro", costo: 320 },
  { nombre: "celular", costo: 10000 },
  { nombre: "Laptop", costo: 20000 },
  { nombre: "Teclado", costo: 500 },
  { nombre: "Audifonos", costo: 1700 },
];

var encontrandoArticulo = articulo.find(function (articulo) {
  return articulo.nombre === "Laptop";
});
//retorna nombre :"LapTop " , costo : 20000

///////Metodo forEach

articulo.forEach(function (articulo) {
  console.log(articulo.nombre);
});
//retorna solo los nombre del array
// "Tv"
// "Libro"
// "celular"
// "Laptop"
// "Teclado"
// "Audifonos"
