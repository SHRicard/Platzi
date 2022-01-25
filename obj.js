var miAuto = {
  marca: "Ford",
  modelo: "eco Sport",
  annio: 2009,
  color: "blanco",
  detalleDelAuto: function () {
    console.log(`Auto ${this.modelo}${this.annio}`);
  },
};

//miAuto.detalleDelAuto();
//Auto eco Sport 2009
//////////////////////////////////////////////////////////////////////////////
//Function Construtora
function auto(marca, modelo, annio, color) {
  // this ase referencia a la funcion auto
  this.marca = marca;
  this.modelo = modelo;
  this.annio = annio;
  this.color = color;
}

var autoNuevo = new auto("Tesla", "model 3", 2020, "Negro");

// retorna lo siguiente
// autoNuevo = {
//     marca: "Tesla",
//     modelo: "model 3",
//     annio: 2020,
//     color: "Negro",
//     detalleDelAuto: function () {
//       console.log(`Auto ${this.modelo}${this.annio}`);
//     },
//   };

var autoNuevo2 = new auto("Tesla", "model X", 2018, "Negro y blanco");
var autoNuevo3 = new auto("Fiat", "Uno", 2010, "Rojo");
// llamamos al autoNuevo2
// retorna lo siguiente
// autoNuevo2 = {
//     marca: "Tesla",
//     modelo: "model X",
//     annio: 2018,
//     color: "Negro y blanco",
//     detalleDelAuto: function () {
//       console.log(`Auto ${this.modelo}${this.annio}`);
//     },
//   };
var autoNuevo3 = new auto("Fiat", "Uno", 2010, "Rojo");
// llamamos al autoNuevo3
// retorna lo siguiente
// autoNuevo3 = {
//     marca: "Fiat",
//     modelo: "Uno",
//     annio: 2010,
//     color: "Rojo",
//     detalleDelAuto: function () {
//       console.log(`Auto ${this.modelo}${this.annio}`);
//     },
//   };
