'use strict';

const produto = {
    nome: 'Caneta Bic Preta',
    preco: 1.90,
    desconto: 0.05
}

function clone(objeto) {
    return { ...objeto };
}

const novoProduto = clone(produto);
novoProduto.nome = 'Caneta Bic Azul'
novoProduto.desconto = 0.10

console.log(produto);
console.log(novoProduto);