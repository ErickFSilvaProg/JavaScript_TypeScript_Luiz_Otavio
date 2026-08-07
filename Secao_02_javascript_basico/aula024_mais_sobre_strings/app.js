/*
    Strings:

        Strings, no javascript, são iteráveis.
        Cada caractere pertence a um índice, iniciando do 0 (zero).
        A iteração é realizada por meio dos couchetes.

*/

// Variáveis:
//               01234567
let umaString = 'Um texto';

// Contagem negativa:                          987654321-
// Contagem positiva: 0123456789112345678921234567893123
let outraString =    'O rato roeu a roupa do Rei de Roma';


// Recuperar o elemento pelo índice da string:
console.log('- Recuperar o elemento pelo índice da string:');
console.log(umaString[4]);
console.log(umaString[8]); // Retorna undefined.
console.log(umaString[-1]); // Retorna undefined.
console.log();

console.log(umaString.charAt(6));
console.log(umaString.charAt(8)); // Retorna um vazio.
console.log();


// Concatenar strings:
console.log('- Concatenar strings:');
console.log(umaString.concat(' em um lindo dia!'));
console.log(umaString + ' em um lindo dia!');
console.log(`${umaString} em um lindo dia!`);
console.log();


// Pesquisar por índices: Se não encontrado retornará -1.
console.log('- Pesquisar por índices: Se não encontrado retornará -1.');
console.log(umaString.indexOf('texto'));
console.log(umaString.indexOf('casa'));
console.log(umaString.indexOf('o', 3)); // Pesquisa apartir de tal índice.
console.log();


// Perquisar por índices de trás para frente: Se não encontrado retornará -1.
console.log('- Perquisasr por índices de trás para frente: Se não encontrado retornará -1.');
console.log(umaString.lastIndexOf('o'));
console.log(umaString.lastIndexOf('o', 3)); // Pesquisa apartir de tal índice.
console.log(umaString.lastIndexOf('m', 3));
console.log();


// Pesquisar com expressões regulares:
console.log('- Pesquisar com expressões regulares:');
console.log(umaString.match(/[a-z]/g)); // Retorna todas as letras "minúsculas".
console.log(umaString.search(/[a-z]/));
console.log();


// Substituir palavras com expressões regulares ou sem expressões regulares:
console.log('- Substituir palavras com expressões regulares ou sem expressões regulares:');
console.log(umaString.replace('Um', 'Outro'));
console.log(umaString.replace(/Um/, 'Outro'));
console.log(outraString.replace(/r/, 'p')); // Substitue apenas o primeiro "r".
console.log(outraString.replace(/r/g, 'p')); // Substitue os "r" minúsculos.
console.log();


// Recupera o tamanho de uma string:
console.log('- Recupera o tamanho de uma string:');
console.log(umaString.length);
console.log();


// Fatiamento de string: Precisa-se acrescentar uma posição a mais para ter o conteúdo desejado.
console.log('- Fatiamento de string: Precisa-se acrescentar uma posição a mais para ter o conteúdo desejado.');
console.log(outraString.slice(2, 6)); // (início, fim).
console.log(outraString.slice(30));
console.log(outraString.slice(-4)); // Contagem negativa. Do final para o início do string.
console.log();


// Dividir strings:
console.log('- Dividir strings:');
console.log(outraString.split(' ')); // Divisor
console.log(outraString.split(' ', 3)); // Limitando a divisão com apenas três resultados.
console.log();


// Formatando o string para letras maiúsculas:
console.log('- Formatando o string para letras maiúsculas:');
console.log(umaString.toUpperCase());
console.log(outraString.toUpperCase());
console.log();


// Formatando o string para letras minúsculas:
console.log('- Formatando o string para letras minúsculas:');
console.log(umaString.toLowerCase());
console.log(outraString.toLowerCase());
console.log();