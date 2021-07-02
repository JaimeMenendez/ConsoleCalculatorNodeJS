// Imports
let sumar = require('./sumar');
let restar = require('./restar');
let multiplicar = require('./multiplicar');
let dividir = require('./dividir');

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Inserte los valores de a y b: ");
rl.question("a = ", function (a) {
    rl.question("b = ", function (b) {
        console.log();
        console.log(sumar(Number(a), Number(b)));
        console.log(restar(Number(a), Number(b)));
        console.log(multiplicar(Number(a), Number(b)));
        console.log(dividir(Number(a), Number(b)));

        rl.close();
    });
});