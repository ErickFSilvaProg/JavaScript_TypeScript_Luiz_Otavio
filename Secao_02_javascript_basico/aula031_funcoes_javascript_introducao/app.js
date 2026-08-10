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

        A função escerra sua operação após a execução para palavra "return". Nada será executado após o "return".

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
    // Constante protegida pelo escopo da função.
    const resultado = x + y;
    return resultado;
}

// Além desta, não existe outra constante "resultado" no escopo global.
const resultado = soma(10, 30);
console.log(resultado);


// ● Executar uma função sem enviar argumentos retornará um "NaN".
function soma2(x,y) {
    return x + y;
}

const resultado2 = soma2();
console.log(resultado2);


// ● Executar uma função de soma enviando argumentos strings retornará uma concatenação.
function soma3(x,y) {
    return x + y;
}

const resultado3 = soma3('Erick', 'Ferreira');
console.log(resultado3);


// ● Função com valor padrão:
