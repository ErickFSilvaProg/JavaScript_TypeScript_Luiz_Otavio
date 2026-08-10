// Exercício:

const nome = 'Erick Ferreira';
const anoNascido = 1986;
let anoAtual = new Date().getFullYear();
let idade = anoAtual - anoNascido;
let peso = 82;
let alturaEmM = 1.75;
let imc = peso / (alturaEmM * alturaEmM);


console.log(
    `${nome} tem ${idade} anos, pesa ${peso}kg. Tem ${alturaEmM}m de altura e seu IMC é de ${imc.toFixed(2)}.`
);