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

const dameCarta = (): number => {
  let nuevaCarta = 0;
  // Loq que sea con random
  nuevaCarta = Math.floor(Math.random() * 10) + 1;

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
  habilitaPedirCarta(true);
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

const muestraCarta = (numerocarta: number) => {
  const urlImagen = dameImagenDeCarta(numerocarta);
  asignaImagenAElementoImg(urlImagen);
};

const habilitaPedirCarta = (habilitar: boolean) => {
  const botonDameCarta = document.getElementById("dameCarta");
  if (botonDameCarta instanceof HTMLButtonElement) {
    botonDameCarta.disabled = !habilitar;
  }
};

const calculaPuntosDeUnaCarta = (numero: number): number =>
  numero <= 7 ? numero : 0.5;

const botonDameCarta = document.getElementById("dameCarta");
const botonNuevaPartida = document.getElementById("nuevaPartida");

if (botonNuevaPartida instanceof HTMLButtonElement) {
  botonNuevaPartida.addEventListener("click", () => {
    inicializaJuego();
    habilitarBotonMePlanto(true);
  });
}

if (botonDameCarta instanceof HTMLButtonElement) {
  botonDameCarta.addEventListener("click", () => {
    const nuevoNumero = dameCarta();
    muestraCarta(nuevoNumero);
    puntuacion = puntuacion + calculaPuntosDeUnaCarta(nuevoNumero);
    muestraNumeroPuntuacion();
    if (hasSuperadoLaPuntuacion()) {
      alert("has superado el numero de intentos");

      habilitaPedirCarta(false);
      habilitarBotonMePlanto(false);
    }
  });
}

const habilitarBotonMePlanto = (habilitar: boolean) => {
  const botonMePlanto = document.getElementById("mePlanto");
  if (botonMePlanto instanceof HTMLButtonElement) {
    botonMePlanto.disabled = !habilitar;
  }
};

const mensajeMePlanto = (puntacion: number): string => {
  habilitaPedirCarta(false);
  habilitarBotonMePlanto(false);
  if (puntuacion >= 0 && puntacion < 2) {
    return "Parece que no has entendido el juego";
  }

  if (puntuacion >= 2 && puntacion < 4) {
    return "Parece que no has entendido el juego";
  }
  if (puntuacion >= 4 && puntacion < 6) {
    return "bien, parece que lo estas entendiendo";
  }
  if (puntuacion >= 6) {
    return "bien hecho!!";
  }

  return "error";
};

const botonMePlanto = document.getElementById("mePlanto");

if (botonMePlanto instanceof HTMLButtonElement) {
  botonMePlanto.addEventListener("click", () => {
    const mensaje = mensajeMePlanto(puntuacion);
    alert(mensaje);
  });
}
