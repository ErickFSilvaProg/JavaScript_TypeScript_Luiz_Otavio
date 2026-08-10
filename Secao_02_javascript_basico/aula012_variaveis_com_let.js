/*
    — Variáveis com "let".
  
    Sempre utilize "let" para criar variáveis.
    Podemos declarar uma variável e não inicializa-la.
    ↪ Ela recebe o valor "undefined" automaticamente.
    
    — Regras para a criação de variáveis com "let":

        Não podemos criar variáveis com palavras reservadas;
        As variáveis precisam ter nomes significativos;
        Não podemos iniciar o nome de variáveis com um número;
        As variáveis não podem conter espaços ou traços para compor nomes compostos;
        Utilizamos o "camelCase" para formar variáveis com palavras compostas;
        A variáveis em JS são "case-sensitive";
        Não podemos redeclarar variáveis com "let";
            ↪ Retorna o erro: SyntaxError: Identifier 'profissao' has already been declared
        Não utilize "var" para criar variáveis, utilize "let";
    
 */


// Variáveis declaradas e inicializadas:
let marido = 'João';
let esposa = 'Maria';
let filho = 'Eduardo';


// Variável declarada e não inicializada:
let profissao;


console.log(`${marido} nasceu em 1984.`);
console.log(`Em 2000 ${marido} conheceu ${esposa}.`);
console.log(`${marido} casou-se com ${esposa} em 2012.`);
console.log(`${esposa} teve 1 filho com ${marido} em 2015.`);
console.log(`O filho de ${marido} se chama ${filho}.`);
console.log();