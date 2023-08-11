const MAXIMO_PUNTUACION: number = 7;
let puntuacion: number = 0;

const hasSuperadoLaPuntuacion = () => {
  return puntuacion > MAXIMO_PUNTUACION;
};

const muestraNumeroPuntuacion = () => {
  const elementoPuntuacion = document.getElementById("puntuacion");
  if (elementoPuntuacion) {
    elementoPuntuacion.innerHTML = `${puntuacion} de ${MAXIMO_PUNTUACION}`;
  }
};

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

const inicializaJuego = () => {
  puntuacion = 0;
  muestraNumeroPuntuacion();
  dameCarta();
};

document.addEventListener("DOMContentLoaded", inicializaJuego);

const dameImagenDeCarta = (numeroCarta: number) => {
  let urlImagen = "./content/back.jpg";
  switch (numeroCarta) {
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
  }

  return urlImagen;
};

const asignaImagenAElementoImg = (urlImagen: string) => {
  const cartaElemento = document.getElementById("carta");
  if (cartaElemento instanceof HTMLImageElement) {
    cartaElemento.src = urlImagen;
  }
};

// img
// src
//./content/back.jpg
const muestraCarta = (numerocarta: number) => {
  const urlImagen = dameImagenDeCarta(numerocarta);
  asignaImagenAElementoImg(urlImagen);
};

const calculaPuntosDeUnaCarta = (numero: number): number =>
  numero <= 7 ? numero : 0.5;

const botonDameCarta = document.getElementById("dameCarta");

if (botonDameCarta instanceof HTMLButtonElement) {
  botonDameCarta.addEventListener("click", () => {
    const nuevoNumero = dameCarta();
    muestraCarta(nuevoNumero);
    // calculaPuntosDeUnaCarta(nuevoNumber)
    puntuacion = puntuacion + calculaPuntosDeUnaCarta(nuevoNumero);
    muestraNumeroPuntuacion();
    if (hasSuperadoLaPuntuacion()) {
      alert("has superado el numero de intentos");
      inicializaJuego();
    }
  });
}
