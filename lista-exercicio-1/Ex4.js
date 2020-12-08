const divisao = (dividendo,divisor) => {
    const resto = dividendo % divisor;
    const divisao = dividendo / divisor;

    return `resto: ${resto}\r\ndivisao: ${divisao}`;
}

console.log(divisao(11,2));