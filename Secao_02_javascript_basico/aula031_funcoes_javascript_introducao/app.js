/*
    — Função rm JavaScript.
    
        Toda função executa uma ação.
        As regras para a criação de funções em JS são as mesmas para as variáveis:

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


// ● Função simples - Sem parâmetros:
function saudacao() {
    console.log('Hello, world!');
}

saudacao(); // Chamada/execução da função.


// ● Função simples - Com parâmetros:
function saudacaoPessoa(pessoa) {
    console.log(`Olá, ${pessoa}!`);
}

saudacaoPessoa('Erick');


// ● Função simples - Com parâmetros e retorno de valor:
function saudacaoPessoa2(pessoa) {
    return `Olá, ${pessoa}!`;
}

const variavel = saudacaoPessoa2('Petrúcio');
console.log(variavel);


// ● Função simples - Recebe e soma dois valores:
function soma(x,y) {
    return resultado = x + y;
}

console.log(soma(2, 2));
console.log(soma(33, 6));
console.log(soma(10, 43));