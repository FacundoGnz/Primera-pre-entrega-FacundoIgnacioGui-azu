//Guardamos el nombre del usuario y validamos si escribió o dejó en blanco

let nombreUsuario = prompt("Escribre tu nombre");

if(nombreUsuario === null || nombreUsuario.trim() === "") {
    alert("No has ingresado un nombre válido. Por favor, recarga la página e ingresa tu nombre.");
} else{
        alert("¡Bienvenido/a, " + nombreUsuario + "!");
}

 // Variable para almacenar el total de la compra.
let totalCompra = 0;

// Lista de artículos con sus nombres y precios.
const articulos = [
  { nombre: "ESTERILLA", precio: 5 },
  { nombre: "MANCUERNA 5KG", precio: 8 },
  { nombre: "MANCUERNA 10KG", precio: 15 },
  { nombre: "BARRA DOMINADAS", precio: 20 },
  { nombre: "BARRA", precio: 10 },
  { nombre: "4 PESAS DE 10KG", precio: 15 },
  { nombre: "PROTEINA 2KG", precio: 5 },
  { nombre: "SOGA", precio: 2 }
];

// Mostramos un mensaje para indicar que se mostrarán los artículos y el usuario los seleccionará.
alert("Ahora te mostraremos varios artículos y seleccionarás cuantos te quieres llevar.");

// Ciclo para mostrar cada artículo y preguntar al usuario si lo quiere llevar.
for (let i = 0; i < articulos.length; i++) {
  // Preguntamos al usuario si quiere llevar el artículo actual y guardamos su respuesta en la variable respuesta.
  let respuesta = prompt("¿Deseas llevar " + articulos[i].nombre + " por $" + articulos[i].precio + "? (Si/No)").toLowerCase();
  // Si el usuario responde "Si", sumamos el precio del artículo al total de la compra.
  if (respuesta === "si") {
    totalCompra += articulos[i].precio;
  }
}

// Mostramos el total de la compra sin descuento al usuario.
alert("TU COMPRA ES DE: $" + totalCompra);

// Pedimos al usuario que ingrese la cantidad de cuotas que desea para pagar la compra.
let cuotas = prompt("Ofrecemos 3 y 6 cuotas sin interés. Por favor, ingresa el número de cuotas que desees (1, 3 o 6):");

// Condiciones para calcular el monto de cada cuota según la cantidad ingresada por el usuario.
if (cuotas === "1") {
  // Si el usuario elige pagar en 1 cuota, mostramos el total de la compra.
  alert("Eso es todo! Tu compra queda en:\n\n1 CUOTA: $" + totalCompra);
} else if (cuotas === "3") {
  // Si el usuario elige pagar en 3 cuotas, calculamos el monto de cada cuota y lo mostramos.
  let precioCuotas = totalCompra / 3;
  alert("Eso es todo! Tu compra queda en:\n\n3 CUOTAS: $" + precioCuotas.toFixed(2) + " (PRECIO DE CADA CUOTA)");
} else if (cuotas === "6") {
  // Si el usuario elige pagar en 6 cuotas, calculamos el monto de cada cuota y lo mostramos.
  let precioCuotas = totalCompra / 6;
  alert("Eso es todo! Tu compra queda en:\n\n6 CUOTAS: $" + precioCuotas.toFixed(2) + " (PRECIO DE CADA CUOTA)");
} else {
  // Si el usuario ingresa una cantidad inválida de cuotas, mostramos un mensaje de error.
  alert("Número de cuotas inválido. Por favor, recarga la página e ingresa un número válido de cuotas (1, 3 o 6).");
}