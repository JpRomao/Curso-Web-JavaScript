const calculadora = (numero1,numero2,operacao) => {
    switch(operacao) {
        case "+":
            console.log(`${numero1}+${numero2}=${numero1+numero2}`);
            break;
        case "-":
            console.log(`${numero1}-${numero2}=${numero1-numero2}`);
            break;
        case "*":
            console.log(`${numero1}*${numero2}=${numero1*numero2}`);
            break;
        case "/":
            console.log(`${numero1}/${numero2}=${numero1/numero2}`);
            break;
        default:
            console.log("Operacao não existente.");
            break;
    }
}

calculadora(1,1,"+");
calculadora(4,2,"-");
calculadora(1,2,"*");
calculadora(4,2,"/");