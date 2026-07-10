/*
    — Operadores aritméticos:

        () ............... → Parênteses
        ++ ............... → Incremento 
        -- ............... → Decremento
        ** ............... → Potenciação
        *  ............... → Multiplicação
        /  ............... → Divisão
        %  ............... → Módulo (resto da divisão)
        +  ............... → Adição ou concatenação
        -  ............... → Subtração
        <, <=, >, >=  .... → Comparadores Relacionais
        ==, !=, ===, !==   → Igualdade e Desigualdade
        (E / OU): &&, ||   → Lógicos
        =, +=, -=, *=, /=  → Atribuição

    Obs.: Quando operadores têm a mesma precedência (ex: multiplicação e divisão), a regra de associatividade entra em ação, sendo geralmente avaliados da esquerda para a direita.

    — Convertendo string em number no javascript:

        parseInt('5');
        parseFloat('5.2');
        Number('2.3');
*/


// Variáveis:
let number1 = 6;
let number2 = 80;
let number3 = '10.2';
let firtName = 'Carlos';


// Incremento:
console.log('- Incremento:');
console.log(number1);
console.log(++number1);
console.log(number1++);
console.log();

// Decremento:
console.log('- Decremento:');
console.log(number1);
console.log(--number1);
console.log(number1--);
console.log();

// Potenciação:
console.log('- Potenciação:');
console.log(number1 ** 2);
console.log();

// Multiplicação:
console.log('- Multiplicação:');
console.log(number2 * number1);
console.log();

// Divisão:
console.log('- Divisão:');
console.log(number1 - number2);
console.log();

// Módulo:
console.log('- Módulo:');
console.log(number2 % number1);
console.log();

// Adição:
console.log('- Adição:');
console.log(number1 + number2);
console.log();

// Concatenação
console.log('- Concatenação:');
console.log(number1 + firtName);
console.log();

// Subtração:
console.log('- Subtração:');
console.log(number1 - number1);
console.log();


// Conversão de string para number:
console.log('- Conversão de string para number:');
console.log(number3);
console.log(parseInt(number3));
console.log(parseFloat(number3));
console.log(Number(number3));
console.log();