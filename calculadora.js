// Imports
let sumar = require('./sumar');
let restar = require('./restar');
let multiplicar = require('./multiplicar');
let dividir = require('./dividir');

// Calculos
console.log(sumar(4,5));
console.log(restar(4,5));
console.log(multiplicar(4,5));
console.log(dividir(0,4));

/*
! ¿Qué hubiese sucedido si, en vez de generar un archivo por cada operación matemática, hubiésemos programado todo en un mismo archivo?
* Se hubiera dificultado la deteccion de errores y se hace dificil de leer nuestro codigo. Ademas que se hace mucho menos reutilizable.

!¿Por qué el mejor camino es generar distintos archivos y luego requerirlos en uno solo?
* Porque facilita la programacion, permitiendo segmentar las funcionalidades, detectar de forma mas facil los errores, reutilizar el codigo y permite mayor legilibidad.

!¿Será esta metodología de trabajo una constante de aquí en adelante?
* Si, sobretodo en el trabajo en equipo, donde la segmentacion y modularizacion permite el trabajo de cada miembro de manera individual, y luego integrarlo todo de manera facil y optima.
*/
