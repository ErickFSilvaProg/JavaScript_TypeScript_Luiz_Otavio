// Variáveis:
let firstName;
let lastName;
let firstName2;
let lastName2;
let divText;
let anotherName;
let fullName;
let fullName2;


// ● Entrada do usuário:
firstName = prompt('Informa o nome:');
console.log(firstName);

lastName = prompt('Informe o sobrenome:');
console.log(lastName);


// ● Recupera o campo de exibição do nome:
divText = document.getElementById('text');
console.log(divText);


// ● Programa:
anotherName = confirm('Informar outro nome?');
console.log(anotherName);

if (anotherName) {
    firstName2 = prompt('Informa o outro nome:');
    console.log(firstName2);

    lastName2 = prompt('Informe o outro sobrenome:');
    console.log(lastName2);
}

fullName = (firstName, lastName) => `${firstName} ${lastName}`;
fullName2 = (firstName2='', lastName2='') => `${firstName2} ${lastName2}`;

// ● Inserindo informações na página:
divText.innerHTML = `
    <p>${fullName(firstName, lastName)}</p>
    <p>${fullName2(firstName2, lastName2)}</p>
`;