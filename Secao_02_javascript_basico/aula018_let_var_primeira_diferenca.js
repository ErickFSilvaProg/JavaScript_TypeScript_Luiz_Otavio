/*
    — Diferenças entre "var" e "let":

        Sempre criar variáveis com "let";
        Não podemos redeclarar variáveis com o "let";
            ↪ Retorna o erro: SyntaxError: Identifier 'sobrenome' has already been declared.
        Podemos reatribuir valores em variáveis criadas com "var" ou "let";
        Não criar variáveis sem antes atribuir o "let";
*/


var nome = 'Ivo';
console.log(nome);

var nome = 'Carlos';
console.log(nome);

let sobrenome = "Pedrosa";
// let sobrenome = "Valença";

idade = 40;
console.log(idade);