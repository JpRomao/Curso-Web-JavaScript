const recebeAumento = (plano,salarioAtual) => {
    switch(plano){
        case "A":
            return `Novo salário: R$${salarioAtual * 1.1}`;
            break;
        case "B":
            return `Novo salário: R$${salarioAtual * 1.15}`;
            break;
        case "C":
            return `Novo salário: R$${salarioAtual * 1.2}`;
            break;
        default:
            return "Plano inválido.";
    }
}

console.log(recebeAumento("A",1000));
console.log(recebeAumento("B",1000));
console.log(recebeAumento("C",1000));
console.log(recebeAumento("D",1000));