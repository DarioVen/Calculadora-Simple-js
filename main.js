

// Funciones
const validarNumero = (numero) => {
    while (isNaN(numero)) {
        alert("Debe agregar un número válido!");
        numero = prompt("Ingrese un número:");
    }
    return (Number(numero));
};

const obtenerNumeroValido = (mensaje) => {
    return validarNumero(prompt(mensaje));
};



// Calculadora
function calculadora() {
// Inicializar variables
let primerNumero=0;
let siguienteNumero=0;
let operador="";
let resultado=0;
let continuar = true;


// Función para obtener un operador valido

const obtenerOperadorValido = () => {
  let operador;
  do {
      operador = prompt("Seleccione un operador (+, -, *, /):");
      switch (operador) {
          case '+':
          case '-':
          case '*':
          case '/':
              return operador;
          default:
              alert("Operador inválido. Por favor, ingrese +, -, * o /");
      }
  } while (true); 
};

// Obtener los números del usuario
primerNumero = obtenerNumeroValido("Ingrese el primer número:");



const realizarOperacion = () =>{
  siguienteNumero = obtenerNumeroValido("Ingrese el siguiente número");
  operador = obtenerOperadorValido ()

  switch (operador) {
    case "+":
        resultado = primerNumero + siguienteNumero;
        break;
    case "-":
        resultado = primerNumero - siguienteNumero;
        break;
    case "*":
        resultado = primerNumero * siguienteNumero;
        break;
    case "/":
        if (siguienteNumero === 0) {
            alert("No se puede dividir por cero");
        } else {
            resultado = primerNumero / siguienteNumero;
        }
        break;
}

return resultado; 
}

// Llamar a la función para realizar la operación y mostrar el resultado

while (continuar) {
    resultado = realizarOperacion(resultado);
        alert("El resultado es: " +resultado);
        primerNumero = resultado;
        continuar = confirm("¿Continuar con el cálculo?");
    } 
}
// Fin Calculadora

// Calcular promedio
function promedio() {

let numeros = [];
let continuar = true;
//Obtenemos los numeros
while (continuar) {
    let numero = obtenerNumeroValido("Ingrese un número");
    numeros.push (numero);
    continuar = confirm("agregar otro numero");
}

if (numeros.length === 0) {
    alert("No se ingresaron números."); 
}
else{
    //Calculamos el promedio actual

    let suma = numeros.reduce((total, numero) => total + numero, 0);
    console.log(suma);

    let promedioActual = suma / numeros.length;
    alert("Los números ingresados son: " + numeros.join(", "));
    alert("Tu promedio es de " + promedioActual);

    // Calculamos el promedio deseado y las instancias restantes
    let promedioDeseado = obtenerNumeroValido("Ingrese el promedio deseado:");
    let instanciasRestantes;
    do {
        instanciasRestantes = obtenerNumeroValido("Ingrese cuántas instancias habrá hasta el promedio deseado (un número entero positivo):");
        if (!Number.isInteger(instanciasRestantes) || instanciasRestantes <= 0) {
            alert("Por favor, ingrese un número entero positivo mayor que cero.");
        }
    } while (!Number.isInteger(instanciasRestantes) || instanciasRestantes <= 0);
    

    // Calculamos los puntos necesarios
    let puntosDeseados = promedioDeseado * (numeros.length + instanciasRestantes);
    let puntosNecesarios = puntosDeseados - suma;

    alert("Necesitas obtener " + puntosNecesarios + " puntos en las próximas " + instanciasRestantes + " instancias para alcanzar un promedio de " + promedioDeseado)
}
}

// Sellecionar Algoritmo
let algoritmoElegido;

do {
  algoritmoElegido = prompt("Seleccione qué función desea usar:\n- Calculadora\n- Promedio");

  switch (algoritmoElegido.toLowerCase()) {
    case "calculadora":
      calculadora();
      break;
    case "promedio":
      promedio();
      break;
    default:
        alert("Opción inválida.");
        console.log("Opción inválida.");
  }
} while (algoritmoElegido !== null && algoritmoElegido.trim() !== "");

