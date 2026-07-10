// Caixa de mensagem que solicita uma entrada de texto ao usuário.
let firtName = prompt('Enter your name:');
console.log(firtName);


// Caixa de mensagem que pede uma confirmação. Retornando um boolean: true ou false.
let displayYourName = confirm('Display the name?');
console.log(displayYourName);

if (displayYourName) {
    // Caixa de mensagem simples.
    alert(firtName);
}
else {
    alert('Blocked name!');
}
