const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Moura', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
];

//Desafio 1
const todosBolsistas = (resultado,bolsista) => resultado && bolsista;
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas));

//Desafio 2
const algumBolsista = (resultado,bolsista) => resultado || bolsista;
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista));
