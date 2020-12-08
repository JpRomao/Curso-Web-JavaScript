function toMoney(number) {
    return number.toFixed(2).replace('.',',');
}

const simpleInterest = (initialMoney, interestTax, applicationTime) => {
    const mount = initialMoney + (initialMoney * (interestTax / 100) * applicationTime);

    return `R$${toMoney(mount)}`;
}

const compoundInterest = (initialMoney, interestTax, applicationTime) => {
    const mount = initialMoney * ((1 + (interestTax / 100)) ** applicationTime);

    return `R$${toMoney(mount)}`;
}

console.log(`Simple interest: ${simpleInterest(520, 1, 3)}`);

console.log(`Compount interest: ${compoundInterest(8000, 1.2, 6)}`);