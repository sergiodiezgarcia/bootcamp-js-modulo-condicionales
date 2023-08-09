const MAXIMO_PUNTUACION: number = 7;
let puntuacion: number = 0;

type Estado = {
  UNO_COPAS: 1;
  DOS_COPAS: 2;
  TRES_COPAS: 3;
  CUATRO_COPAS: 4;
  CINCO_COPAS: 5;
  SEIS_COPAS: 6;
  SIETE_COPAS: 7;
  SOTA_DE_COPAS: 0.5;
  CABALLO_DE_COPAS: 0.5;
  REY_DE_COPAS: 0.5;
};
const muestraNumeroPuntuacion = () => {
  const elementoPuntuacion = document.getElementById("puntuacion");
  if (elementoPuntuacion) {
    elementoPuntuacion.innerHTML = `${puntuacion} de ${MAXIMO_PUNTUACION}`;
  }
};

document.addEventListener("DOMContentLoaded", muestraNumeroPuntuacion);

// Implementa una función que te de un número aleatorio entre 1 y 12
// Cuando tengas esto, mira como lo refinarías para generar un numero que sea:
// 1,2,3,4,5,6,7,10,11,12
const dameCarta = (): number => {
  let nuevaCarta = 0;
  // Loq que sea con random
  nuevaCarta = Math.floor(Math.random() * 10) + 1;

  // Si nuevaCarta > 7
  // nuevaCarta = nuevaCarta + 2;
  if (nuevaCarta > 7) {
    nuevaCarta = nuevaCarta + 2;
  }

  return nuevaCarta;
};

let nuevaCarta = dameCarta();
console.log(nuevaCarta);

// img
// src
//./content/back.jpg
const muestraCarta = (numerocarta: number) => {
  let urlImagen = "./content/back.jpg";
  switch (numerocarta) {
    case 1:
      urlImagen = "./content/1-copas.jpg";
      break;
    case 2:
      urlImagen = "./content/2-copas.jpg";
      break;
    case 3:
      urlImagen = "./content/3-copas.jpg";
      break;
    case 4:
      urlImagen = "./content/4-copas.jpg";
      break;
    case 5:
      urlImagen = "./content/5-copas.jpg";
      break;
    case 6:
      urlImagen = "./content/6-copas.jpg";
      break;
    case 7:
      urlImagen = "./content/7-copas.jpg";
      break;
    case 10:
      urlImagen = "./content/10-sota-copas.jpg";
      break;
    case 11:
      urlImagen = "./content/11-caballo-copas.jpg";
      break;
    case 12:
      urlImagen = "./content/12-rey-copas.jpg";
      break;
    // 10,11,12
  }

  const cartaElemento = document.getElementById("carta");
  if (cartaElemento instanceof HTMLImageElement) {
    cartaElemento.src = urlImagen;
  }
};

const botonDameCarta = document.getElementById("dameCarta");

if (botonDameCarta instanceof HTMLButtonElement) {
  botonDameCarta.addEventListener("click", () => {
    const nuevoNumero = dameCarta();
    muestraCarta(nuevoNumero);
  });
}
