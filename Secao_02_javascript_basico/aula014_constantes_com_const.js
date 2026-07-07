/*
    — Constantes com "const".
    
    — Regras para a criação de variáveis com "let":

        Sempre utilize "const" para criar constantes;
        Não podemos criar constantes com palavras reservadas;
        As constantes precisam ter nomes significativos;
        Não podemos iniciar o nome de constantes com um número;
        As constantes não podem conter espaços ou traços para compor nomes compostos;
        Utilizamos o "camelCase" para formar constantes com palavras compostas;
        A constantes em JS são "case-sensitive";
        Não podemos redeclarar constantes
            ↪ Retorna o erro: SyntaxError: Missing initializer in const declaration
        Não podemos modificar os valores das constantes;
            ↪ Retorna o erro: SyntaxError: Identifier 'marido' has already been declared
        Não utilize "var", utilize "const" para declarar constantes.
    
 */


// — Constantes declaradas e inicializadas:
const marido = 'João';
const esposa = 'Maria';
const filho = 'Eduardo';

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado += 5;


// — Retorna erro:
// const profissao;
// const marido = 'Pedro';


// Strings:
console.log(`${marido} nasceu em 1984.`);
console.log(`Em 2000 ${marido} conheceu ${esposa}.`);
console.log(`${marido} casou-se com ${esposa} em 2012.`);
console.log(`${esposa} teve 1 filho com ${marido} em 2015.`);
console.log(`O filho de ${marido} se chama ${filho}.`);
console.log();


// Numbers:
console.log(resultado); // Constante
console.log(resultadoDuplicado); // Constante
console.log(resultadoTriplicado); // Variável