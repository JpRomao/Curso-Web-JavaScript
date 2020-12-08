const compraVeiculo = veiculo => {
    switch(veiculo){
        case 'hatch':
            return "Compra efetuada com sucesso!";
            break;
        case 'sedan':
        case 'motocicleta':
        case 'caminhonete':
            return "Tem certeza que não prefere este modelo?";
            break;
        default:
            return "Não trabalhamos com este tipo de automóvel aqui";
    }
}

console.log(compraVeiculo("sedan"));
console.log(compraVeiculo("uno"));
console.log(compraVeiculo("hatch"));