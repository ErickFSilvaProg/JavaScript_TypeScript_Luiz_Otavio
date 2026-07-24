let numero = Number(prompt('Digite um número'));

let numeroTitulo = document.getElementById('numero-titulo');
let texto = document.getElementById('texto');

if (numero != null) {
    // numero = Number(numero);

    numeroTitulo.innerHTML = numero;
    texto.innerHTML = `
        <p>Raiz quadrada: <b>${(numero ** 0.5)}</b></p>
        <p>${numero} é inteiro: <b>${Number.isInteger(numero)}</b></p>
        <p>É NaN <b>${Number.isNaN(numero)}</b></p>
        <p>Arredondando para baixo: <b>${Math.floor(numero)}</b></p>
        <p>Arredondar para cima: <b>${Math.ceil(numero)}</b></p>
        <p>Com duas casas decimais: <b>${numero.toFixed(2)}</b></p>
    `;
}


