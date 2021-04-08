// var nombre = prompt('Cual ees tu nombre');
// document.getElementById('mensaje').innerHTML = `Bienvenido ${nombre}`;

// console.log([1, 2, 3]);

// creando variables

// var nombre1;

// nombre1 = 'Camilo';
// console.log(nombre1);
// Funsiones para String o cadenas de texto
// let nombre;
// let actividad = 'Curso de basico de JavaScript';
//Remplazar palabras....
// nombre = actividad.replace('JavaScript', 'JS');

//Verificar que una palabra exista o cadena de caracteres...
// nombre = actividad.includes('JavaScript');

// console.log(nombre);

// Numeros con javaScript

// const num1 = 30,
//     num2 = 20,
//     num3 = 15,
//     num4 = 45,
//     num5 = 56;

// let resultado;

// resultado = num1 + num2;



// console.log(resultado);

// let puntaje = 0;

// console.log(puntaje)

// Convertir String a numero

// let num1 = 50,
//     num2 = "10",
//     num3 = "tres",
//     num4 = 10.20;

// console.log(Number(num2) + num1);
// console.log(parseFloat(num4) + num1);
// console.log(Number(num3));

// metodo to Fixed

// let num1 = "10101020220.525421215";
// let num2 = 1515124524552.659445;

// console.log(Number(num1).toFixed(1));
// console.log(num2.toFixed(5));

// convertir de numeros a string

// let dato = 198;

// dato = String(dato);


// console.log(dato);
// console.log(dato.length);

// tipos de datos en javascript -----------

//String
// const nombre = 'juan';
// console.log(typeof nombre);

// //Numeros
// const edad = 80;
// console.log(typeof edad);

// let valor;
// console.log(typeof valor);
// valor = "hola";
// console.log(typeof valor);
// valor = 1;
// console.log(typeof valor);

// tipo de dato null.

// let hijos = null;

// console.log(typeof hijos);

// let lenguajes = ['html5', 'css', 'js'];
// console.log(typeof lenguajes);

// let persona = {
//     nombre: 'juan',
//     edad: 21
// }
// console.log(typeof persona);

// arreglos o Arrays --------------------------//

// const numeros = [10, 20, 5, 6, 85];
// console.log(numeros);
// console.log(typeof numeros);
// console.table(numeros);

// const meses = new Array('enero', 'febrero', 'marzo');
// meses.unshift('mes 0');
// meses.push('abril');
// console.table(meses);

// //ordenar arreglo en orden alfabetico.

// let frutas = ['Manzanas', 'Peras', ' Aguacates', 'Moras'];

// frutas.sort();

// console.log(frutas);

//----Objetos-------//

// const persona = {
//     nombre: 'juan',
//     apellidos: 'Bonilla',
//     edad: 30,
//     trabajo: true,
// }
// console.log(persona.nombre);

//--------Funciones-----------//

saludar('Juan', 'Desarrolador Web');
saludar('John', 'Medico');
saludar('Carlos', 'MOtotaxista');


function saludar(nombre, trabajo) {

    console.table('hola ' + nombre + ' Su trabajo es ' + trabajo);
}