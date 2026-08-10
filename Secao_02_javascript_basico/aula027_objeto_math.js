/*
    — Objeto Math:

*/


// Variáveis:
let num1 = 6.49;
let num2 = 6.50;
let num3 = 2;
let num4 = 9;

// 
console.log(num1);
console.log(num2);
console.log();


// Arredondar um número para baixo:
console.log(Math.floor(num1));
console.log(Math.floor(num2));
console.log();


// Arredondar um número para cima:
console.log(Math.ceil(num1));
console.log(Math.ceil(num2));
console.log();


// Arredondar para o número mais próximo:
console.log(Math.round(num1));
console.log(Math.round(num2));
console.log();


// Retorna o maior número de uma sequência de números:
console.log(Math.max(1,2,3,4,5,-10,-50,1500,9,8,7,6));
console.log();


// Retorna o menor número de uma sequência de números:
console.log(Math.min(1,2,3,4,5,-10,-50,1500,9,8,7,6));
console.log();


// Gerar números aleatórios entre 0 e 1, sendo que o número 1 não será incluído:
console.log(Math.random());
console.log(Math.random() * (10 - 5) + 5);
console.log(Math.round(Math.random() * (10 - 5) + 5)); // Número entre 10 (máximo) e 5 (mínimo).
console.log();


// Valor de PI:
console.log(Math.PI);
console.log();


// Potenciação:
console.log(2 ** 10); // Utilizando o operador.
console.log(Math.pow(num3, 10)); // Utilizando o objeto.
console.log();


// Raiz quadrada:
console.log(num4 ** 0.5);
console.log();


// Atenção: Em javascript podemos dividir um número por 0 (zero):
// Cuidado com isso... Retonará um "Infinity".
console.log(!!(100 / 0)); // Isso será avaliado como "true".
console.log(100 / 0);
console.log();