/*
    — Números em JavaScript:



*/


let num1 = 1;
let num2 = 2.5;
let num3 = 1024;
let num4 = 10.5789551255547;
let num5 = '2026';
let texto = 'Lorem ipsum';


// Convertendo número em string:
console.log('// Convertendo número em string:');
console.log(num1.toString() + num2); // Os números serão concatenados e não somados.
console.log();


// Representação binária de um número:
console.log('// Representação binária de um número:');
console.log(num3.toString(2));
console.log();


// Limitar as casas decimais:
console.log('// Limitar as casas decimais:');
console.log(num4.toFixed(2));
console.log();


// Checando se o valor é um inteiro:
console.log('// Checando se o valor é um inteiro:');
console.log(Number.isInteger(num1)); // Número inteiro.
console.log(Number.isInteger(num2)); // Número com ponto flutuante.
console.log(Number.isInteger(num5)); // Número em formato string.
console.log();


// Checando se o valor é um NaN (Not a Number):
console.log('// Checando se o valor é um NaN (Not a Number):');
console.log(Number.isNaN(num1));
console.log(Number.isNaN(texto));
console.log();