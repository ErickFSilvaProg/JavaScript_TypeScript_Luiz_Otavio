let addUpNumbers = confirm('Add up numbers?');

if (addUpNumbers) {
    let number1 = prompt('First number: ');
    let number2 = prompt('Second number: ');

    let totalValue = Number(number1) + Number(number2);
    console.log(totalValue);

    alert(`Summed value: ${totalValue}`);
}