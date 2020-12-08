const showMoney = value => {
    const valueInReais = `R$${value.toFixed(2).toString().replace(".",",")}`;

    return valueInReais;
}

console.log(`${showMoney(0.1 + 0.2)}`);