// Caixa de mensagem que solicita uma entrada de texto ao usuário.
let firstname = prompt('Enter your name:');
console.log(firstname);


// Caixa de mensagem que pede uma confirmação. Retornando um boolean: true ou false.
let displayYourName = confirm('Display your name?:');
console.log(displayYourName);

if (displayYourName) {
    alert('User name: ' + firstname);
}
else {
    console.log('Blocked name!');
}