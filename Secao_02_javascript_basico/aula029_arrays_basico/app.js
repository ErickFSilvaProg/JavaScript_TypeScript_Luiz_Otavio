/*
    — Arrays em JavaScript:
*/


// Arrays:        0       1      2
const alunos = ['Luiz','Maria','João'];
const alunosRemovidos = [];
let isArray;


// Lista o array completo:
console.log(alunos);
console.log();


// Lista cada posição separadamente:
console.log(`${alunos[0]}, ${alunos[1]}, ${alunos[2]}`);
console.log();


// Acessar um índice que não existe no array:
console.log('Índice inexistente no array: ', alunos[50]);
console.log();


// Editar os valores do array:
console.log(alunos);
alunos[0] = 'Erick';
alunos[3] = 'Luiza'; // Será adicionado este índice caso não exista.
console.log(alunos);
console.log();


// Verificando o tamanho do array:
console.log(alunos.length);
console.log();


// Fatiar os índices do array:
console.log(alunos.slice(0, 3)); // O último índice não será considerado.
console.log(alunos.slice(0, -1)); // Recupera os índices desconsiderando o último.
console.log();


// Verificar qual é o tipo do array:
console.log(typeof alunos);
console.log();


// Verificar se a constante "alunos" é uma instância de array:
console.log(alunos instanceof Array);
console.log();


/* ******** ADICIONAR ÍNDICES ******** */

// Adicionar índices no final do array com o "length":
alunos[alunos.length] = 'Leandro';
console.log(alunos);
console.log();


// Adicionar índices no final do array com o "push()":
alunos.push('Carlos');
console.log(alunos);
console.log();


// Adicionar índices no início do array:
alunos.unshift('Clara');
console.log(alunos);
console.log();


/* ******** REMOVER ÍNDICES ******** */

// Remover índices no final do array:
alunos.pop();
console.log(alunos);
console.log();


// Recuperar o índice do array antes de remove-lo:
alunosRemovidos.push(alunos.pop());
console.log(`Alunos removidos: ${alunosRemovidos}`);
console.log(alunos);
console.log();


// Remover índices no início do array:
alunos.shift()
console.log(alunos);
console.log();


// Recuperar o índice do array antes de remove-lo:
alunosRemovidos.push(alunos.shift());
console.log(`Alunos removidos: ${alunosRemovidos}`);
console.log(alunos);
console.log();


// Remover elementos do array sem alterar os índices:
delete alunos[1];
console.log(alunos);
console.log();
