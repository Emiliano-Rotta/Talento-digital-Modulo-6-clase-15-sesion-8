// //Tipos de Errores en la Programación

// // Errores de Sintaxis (Syntax Errors)
// // Definición: Suceden cuando las reglas del lenguaje no se respetan. Por ejemplo, olvidar un paréntesis, una coma o una palabra clave mal escrita.

// //hola Emiliano //SyntaxError: Unexpected identifier

// //console.log("hola) //Invalid or unexpected token

// //----------------------------------------------
// //errores de ejecucion Definición: Se producen cuando el programa intenta realizar una operación que no puede completar, como acceder a una variable no definida o dividir por cero.

// //Utilizar try...catch para manejar excepciones.

// //console.log(hola) //ReferenceError: hola is not defined

// // const a = undefined

// // console.log(a.length) //TypeError: Cannot read properties of undefined (reading 'length'




// //----------------------------------------------
// // errores logicos

// // a = "b" // TypeError: Assignment to constant variable.

// // const sumar = (a, b) =>{
// //     console.log(a - b)
// // }

// // sumar (10, 7) //3

// // Cómo evitarlos??
// // Escribir pruebas unitarias.
// // Revisar la lógica con calma o hacer "debugging".

// // debugging
// // El debugging es el proceso de encontrar y corregir errores en un programa.

// //formas de hacerlo:
// //Identificación del error: Revisar el comportamiento del programa o los mensajes de error.
// //Localización del error: Utilizar herramientas como logs (console.log)
// //mediante pruebas vemos que no suceda.

// //Localización del error:  mediante depuradores integrados

// // const valorUno = 1;
// // const valorDos = 5;
// // let array = [];
// // let suma;
// // let resta;
// // const sumar = (numeroUno, numeroDos ) => {
// //  suma = numeroUno + numeroDos;
// //  return suma;
// // }
// // const restar = () => { 
// //     resta = suma - valorUno;
// //     return resta
// //    }
// //    sumar(valorUno, valorDos);
// //    restar();
// //    array.push(valorUno);
// //    array.push(valorDos);
// //    array.push(suma);
// //    console.log(array)

// //-----------------------------------------------------------------------
// Ejercicio 1: Identificación de errores
// Lee el siguiente código y corrige los errores:
// const multiplicar = (a, b) => {
//   if (a || b === undefined) {
//     throw new Error("Los valores no pueden ser undefined");
//   }
//   return a * b;
// };
// console.log(multiplicar(2)); // Debería devolver un error

// Ejercicio 2: Uso de puntos de interrupción
// Escribe un código que realice una suma de números en un array.
// Agrega un error lógico en la operación.
// Usa VS Code para depurar y encontrar el error.


// Ejercicio 3: Debugging con Logs
// Dado el siguiente código, usa console.log para identificar dónde ocurre el error:

// function dividir(a, b) {
//   if (b = 0) {
//     return "No se puede dividir por cero";
//   }
//   return a / b;
// }
// console.log(dividir(4, 0));


// Ejercicio 4: Validación de parámetros
// El siguiente código intenta sumar dos números, pero no verifica que los parámetros sean válidos. Corrige el error usando validaciones.
// const sumarNumeros = (a, b) => {
//   return a + b;
// };
// console.log(sumarNumeros(2, "3")); // Debería devolver un mensaje indicando que hay un error



// Ejercicio 5: Identificar y corregir errores lógicos
// El siguiente código intenta verificar si un número es par o impar, pero no funciona correctamente. Encuentra y corrige el error.

// const verificarParidad = (numero) => {
//   if (numero % 2 = 0) {
//     return "Es impar";
//   }
//   return "Es par";
// };
// console.log(verificarParidad(3)); // Resultado esperado: "Es impar"


// Ejercicio 6: Debugging de una función recursiva
// El siguiente código tiene un error que provoca que no se detenga nunca. Usa puntos de interrupción para encontrar y corregir el problema.

// function cuentaRegresiva(numero) {
//   console.log(numero);
//   if (numero > 0) {
//     cuentaRegresiva(numero); // Llamada recursiva
//   }
// }
// cuentaRegresiva(5);


// Ejercicio 7: Detectar errores de ejecución
// El siguiente código intenta calcular la longitud de un string ingresado por el usuario. Sin embargo, arroja un error. Identifica y corrige el problema.

// const calcularLongitud = (texto) => {
//   return texto.length;
// };
// console.log(calcularLongitud()); // Resultado esperado: Error manejado o mensaje amigable


// Ejercicio 8: Uso de try...catch para manejar errores
// Agrega un bloque try...catch para manejar un posible error al convertir un string a número.

// const convertirNumero = (cadena) => {
//   return parseInt(cadena);
// };
// console.log(convertirNumero("ABC")); // Debería manejar el error


// Ejercicio 9: Configuración de un punto de interrupción en un ciclo
// Escribe un programa que recorra un array de números.
// Usa un punto de interrupción en el bucle para verificar el valor de cada elemento.

// const numeros = [1, 2, 3, 4, 5];
// numeros.forEach((num) => {
//   console.log("Número actual:", num);
// });



