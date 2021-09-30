let produtos = require ("./bd")

let carrinho = produtos.filter((filtro) => {
    return filtro.valor >= 482 && filtro.valor <= 1600 && filtro.qualidade > 6 && filtro.status === true
})

let somar = 0;

carrinho.forEach((obj) => {
  somar += obj.valor;
});

carrinho = carrinho.map((obj) => console.log(`Item: ${obj.nome} valor: R$ ${obj.valor}`))
console.log(`O valor total dos itens é: R$ ${somar}`)