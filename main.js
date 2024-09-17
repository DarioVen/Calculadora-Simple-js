// Inicializar variables
let primerNumero=0;
let siguienteNumero=0;
let operador="";
let resultado=0;

// Funciones
const validarNumero = (numero) => {
  while (isNaN(numero)) {
      alert("Debe agregar un número válido!");
      numero = (prompt("Ingrese un número:"));
  }
  return numero;
}

// Función para solicitar un número al usuario y validarlo
const obtenerNumeroValido = (mensaje) => {
  let numero;
  do {
      numero = prompt(mensaje);
      numero = validarNumero(numero);
  } while (isNaN(numero));
  return numero;
}

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
        resultado = Number(primerNumero) + Number(siguienteNumero);
        break;
    case "-":
        resultado = Number(primerNumero) - Number(siguienteNumero);
        break;
    case "*":
        resultado = Number(primerNumero) * Number(siguienteNumero);
        break;
    case "/":
        if (Number(siguienteNumero) === 0) {
            alert("No se puede dividir por cero");
        } else {
            resultado = Number(primerNumero) / Number(siguienteNumero);
        }
        break;
}

  return resultado;
};

// Llamar a la función para realizar la operación y mostrar el resultado

let resultadoFinal = realizarOperacion();
alert("El resultado es: " + resultadoFinal);

let continuar = confirm("¿Continuar con el cálculo?");

if (continuar) {
    do {
        primerNumero = resultadoFinal;
        resultadoFinal = realizarOperacion();
        alert("El resultado es: " + resultadoFinal);
        continuar = confirm("¿Continuar con el cálculo?");
    } while (continuar);
}


