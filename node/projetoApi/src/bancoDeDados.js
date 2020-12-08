const sequence = {
    _id: 1,
    get id(){
        return this.id++
    }
}

const produtos = {}

function salvarProduto(produto) {
    if(!produto){
        produto.id = sequence.id;
    }

    produtos[produto.id] = produto;

    return produto;
}

function getProduto(id) {
    return produto[id] || {};
}

function getProdutos() {
    return Object.values(produtos);
}

module.exports = { salvarProduto, getProduto, getProdutos };