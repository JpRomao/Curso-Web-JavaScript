const pedido = (codigo, quantidade) => {
    let preco;
    let nome;
    switch(codigo) {
        case 100:
            preco=3;
            nome="Cachorro quente";
            break;
        case 200:
            preco=4;
            nome="Hamburguer simples";
            break;
        case 300:
            preco=5.5;
            nome="Cheeseburguer";
            break;
        case 400:
            preco=7.5;
            nome="Bauru";
            break;
        case 500:
            preco=3.5;
            nome="Refrigerante";
            break;
        case 600:
            preco=2.8;
            nome="Suco";
            break;
        default:
            console.log("Produto inexistente!");
            break;
    }
    console.log(`Pedido: ${nome}; Quantidade: ${quantidade}; Preço:${preco*quantidade}`);
}

pedido(100,2);
pedido(200,3);
pedido(300,5);
pedido(400,2);
pedido(500,1);
pedido(600,1);