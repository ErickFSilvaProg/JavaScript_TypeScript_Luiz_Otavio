// Caixa de mensagem que solicita uma entrada de texto ao usuário.
let firstName = prompt('Enter your name:');
console.log(firstName);


// Caixa de mensagem que pede uma confirmação. Retornando um boolean: true ou false.
let displayYourName = confirm('Display your name?');
console.log(displayYourName);

if (displayYourName) {
    // Caixa de mensagem simples.
    alert(firstName);
}
else {
    alert('Blocked name!');
}
