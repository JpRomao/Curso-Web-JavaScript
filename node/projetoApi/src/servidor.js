const porta = 3003

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bancoDeDados = require('./bancoDeDados');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/produtos', (request,response,next) => {
    response.send(bancoDeDados.getProdutos());
});

app.get('/produtos/:id', (request,response,next) => {
    response.send(bancoDeDados.getProduto(request.params.id));
});

app.post('/produtos', (request,response,next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: request.body.nome,
        preco: request.body.preco
    });
    response.send(produto);
});

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`);
});