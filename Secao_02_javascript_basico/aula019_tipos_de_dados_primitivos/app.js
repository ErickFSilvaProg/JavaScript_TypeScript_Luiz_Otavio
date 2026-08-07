/* 
    Tipos de dados primitivos:
*/


// STRINGS:
const name = 'Luiz';
const name2 = 'Otávio';
const name4 = 'Carlos';


// NUMBERS:
const yearOfBirth = 1986;
let salary = 6574.35;


// UNDERFINED: Não aponta para local algum na memória.
let active; // Variável sem valor definido no momento da compilação.


// NULL: Não aponta para local algum na memória.
const lastName = null; // Anula o valor da variável intencionalmente.


// BOOLEAN:
const areYouAStudent = true;
const studentPassed = true;


// Tipo de dado passado por referência:
const a = [1,2];
const b = a;

console.log(a, b);

b.push(3);
console.log(a, b);


// Isso não aconteceria se focem utilizados valor do tipo primitivo:
let aa = 2;
let bb = aa;

console.log(aa, bb);

aa = 3;
console.log(aa, bb);