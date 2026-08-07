/*
    — Números em JavaScript:

        O JS segue o padrão IEEE 754-2008.
            
            ↪ É o padrão técnico oficial para aritmética de ponto flutuante em computadores, definindo formatos para números binários e decimais, regras de arredondamento e tratamento de exceções.

*/


let num1 = 10;
let num2 = 0.7;
let num3 = 1024;
let num4 = 10.57;
let num5 = '2026';
let num6 = 0.1;
let valor1 = num2 * 'ola';
let valor2 = num2 * num5;
let valor3 = num2 + num6;


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
console.log(valor1);
console.log(valor2);
console.log(Number.isNaN(valor1));
console.log(Number.isNaN(valor2));
console.log();


// Inconsistência no padrão IEEE 754-2008:
console.log('// Inconsistência no padrão IEEE 754-2008:');
console.log(valor3);
valor3 = Number(valor3.toFixed(1)); // Solução encontrada
console.log(valor3);
console.log();