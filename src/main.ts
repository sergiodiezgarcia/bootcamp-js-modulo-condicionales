
const generarNumeroAleatorio = (): number => Math.floor(Math.random() * 101)   

const numeroparaAcertar: number = generarNumeroAleatorio();

type Estado =
 | "NO_ES_UN_NUMERO"
 | "EL_NUMERO_ES_MAYOR"
 | "EL_NUMERO_ES_MENOR"
 | "ES_EL_NUMERO_SECRETO"
 | "GAME_OVER_MAXIMO_INTENTOS";

 const MAXIMO_INTENTOS: number = 5;
let numeroDeIntentos: number = 0;

const hasSuperadoElNumeroMaximoDeIntentos = () =>
 numeroDeIntentos >= MAXIMO_INTENTOS;

 const muestraNumeroDeIntentos = () => {
    const elementoIntentos = document.getElementById("intentos");
    if (elementoIntentos) {
    elementoIntentos.innerHTML = `${numeroDeIntentos} de ${MAXIMO_INTENTOS}`; 
    }
 }

 document.addEventListener("DOMContentLoaded", muestraNumeroDeIntentos);
    
 

 const muestraMensajeComprobacion = (texto : string, estado : Estado ) => {
    let mensaje : string = "";
    switch ( estado) {
        case "NO_ES_UN_NUMERO" :
            mensaje = `${texto} no es un numero😔`
            break;
        case "EL_NUMERO_ES_MAYOR" :
            mensaje = `${texto} es menor que el numero😔`
            break;
            case "EL_NUMERO_ES_MENOR" :
            mensaje = `${texto} es mayor que el numero😔`
            break;
        case "ES_EL_NUMERO_SECRETO" :
            mensaje = `${texto} es el numero secreto, bien hecho!!!💯💯`
            break;
        case "GAME_OVER_MAXIMO_INTENTOS" :
            mensaje = `GAME OVER 👾👾`
            break;
        default :
        mensaje = `que coño has hecho`

            
    } 
    const elementoResultado = document.getElementById("resultado")
    if(elementoResultado) {
        elementoResultado.innerHTML = mensaje
    }else{
        console.error("muestraMensajeComprobacion: No se ha encontrado el elemento con id resultado"); 
    }
    
};

const comprobarNumero = (texto : string) : Estado => {
    const numero = parseInt(texto);
    const esUnNumero = !isNaN(numero);
    if (!esUnNumero) {
    return "NO_ES_UN_NUMERO";
    }
    if (numero === numeroparaAcertar) {
    return "ES_EL_NUMERO_SECRETO";
    }
    if (hasSuperadoElNumeroMaximoDeIntentos()) {
    return "GAME_OVER_MAXIMO_INTENTOS";
    }
    return numero > numeroparaAcertar ? "EL_NUMERO_ES_MAYOR" : "EL_NUMERO_ES_MENOR";
   };

   const handleCompruebaClick = () => {
    const texto = document.getElementById("numero");
    if (texto) {
        texto.innerHTML = "mensaje" ;
    }else{
     console.error("muestraMensajeComprobacion: No se ha encontrado el elemento con id resultado");   
    }
    const estado = comprobarNumero("texto");
    muestraMensajeComprobacion("texto", estado);
    numeroDeIntentos++;
    muestraNumeroDeIntentos();
    gestionarGameOver(estado);
 };
   

