// Entrada do usuário:
const numero = Number(prompt('Digite um número:'));


// Recupera os campos da página:
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');


// Inserindo informações na página:
numeroTitulo.innerHTML = numero;
texto.innerHTML = `
    <p>Raiz quadrada: ${numero ** 0.5}</p>
    <p>${numero} é inteiro?: ${Number.isInteger(numero) ? 'Sim, é inteiro': 'Não, não é inteiro'}</p>
    <p>É NaN?: ${Number.isNaN(numero) ? 'Sim, não é um número' : 'Não, é um número'}</p>
    <p>Arredondando para baixo: ${Math.floor(numero)}</p>
    <p>Arredondando para cima: ${Math.ceil(numero)}</p>
    <p>Com duas casas decimais: ${numero.toFixed(2)}</p>
`;