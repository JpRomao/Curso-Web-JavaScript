const diaDaSemana = dia => {
    switch(dia){
        case 1:
        case 7:
            return "Fim de semana";
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return "Dia útil";
        default:
            return "Dia inválido";
    }
}

console.log(diaDaSemana(1));
console.log(diaDaSemana(5));
console.log(diaDaSemana(8));