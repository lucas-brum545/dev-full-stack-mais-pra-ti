const prompt = require('prompt-sync')()

// 1. Crie um objeto representando um produto com as propriedades: nome, preço,
// categoria e quantidade em estoque. Use for...in para percorrer e exibir todas as
// propriedades e seus valores. Em seguida, adicione uma nova propriedade
// desconto ao objeto e exiba o preço final calculado.

// let produto = {
//     nome: 'farinha',
//     preco: 4.99,
//     categoria: 'não perecível',
//     quantidadeEstoque: 2500,
//     desconto: 20
// }

// for (const chave in produto) {
//     console.log(chave + ': ' + produto[chave])
// }

// console.log('preço do produto ' + produto.nome + ' com desconto: ' + (produto.preco - (produto.preco * (produto.desconto / 100)).toFixed(2)))

// 2. Crie dois objetos representando personagens de um jogo, cada um com as
// propriedades: nome, vida, ataque e defesa. Use for...in para exibir os atributos de
// cada personagem lado a lado e determine qual deles tem maior poder total
// (soma de vida + ataque + defesa).

// let caneco = {
//     nome: 'caneco',
//     vida: 200,
//     ataque: 150,
//     defesa: 150
// }

// let xicrinho = {
//     nome: 'xicrinho',
//     vida: 200,
//     ataque: 180,
//     defesa: 180
// }

// for (const chave in caneco) {
//     console.log(chave + ': ' + caneco[chave] + ' | ' + chave + ': ' + xicrinho[chave])
// }

// let poderCaneco = caneco.vida + caneco.ataque + caneco.defesa
// let poderXicrinho = xicrinho.vida + xicrinho.ataque + xicrinho.defesa

// if (poderCaneco > poderXicrinho) {
//     console.log('Caneco tem o maior poder total: ' + poderCaneco + ' vs ' + poderXicrinho)
// }
// else {
//     console.log('Xicrinho tem o maior poder total: ' + poderXicrinho + ' vs ' + poderCaneco)
// }

// 3. Crie um objeto representando um funcionário com nome, cargo, salário e anos de
// experiência. Use for...in para listar todos os dados. Com base nos anos de
// experiência, calcule e exiba o bônus anual: até 2 anos = 5% do salário, de 3 a 5
// anos = 10%, acima de 5 anos = 15%.

// let funcionario = {
//     nome: 'Lucas',
//     cargo: 'Analista de TI',
//     salario: 9750,
//     anosExperiencia: 1
// }

// for (const chave in funcionario) {
//     console.log(chave + ': ' + funcionario[chave])
// }

// if (funcionario.anosExperiencia <= 2) {
//     console.log(funcionario.anosExperiencia + ' ano(s) de experiência. Bônus de 5% do salário: R$' + (funcionario.salario + funcionario.salario*0.05))
// }
// else if (funcionario.anosExperiencia >= 3 && funcionario.anosExperiencia <= 5) {
//     console.log(funcionario.anosExperiencia + ' anos de experiência. Bônus de 10% do salário: R$' + (funcionario.salario + funcionario.salario*0.1))
// }
// else {
//     console.log(funcionario.anosExperiencia + ' anos de experiência. Bônus de 15% do salário: R$' + (funcionario.salario + funcionario.salario*0.15))
// }

// 4. Crie um objeto onde cada chave é o nome de um item e o valor é a quantidade
// no inventário do jogador (ex: { espada: 1, poção: 5, escudo: 2 }). Use for...in para
// listar o inventário completo. Permita que o usuário informe um item para usar:
// reduza a quantidade em 1 ou exiba "item esgotado" se for zero.

// let inventario = {
//     espada: 1,
//     pocao: 5,
//     escudo: 2,
//     arco: 0
// }

// for (const chave in inventario) {
//     console.log(chave + ': ' + inventario[chave])
// }

// let itemUsuario = prompt('Informe um item para usar: ')
// if (inventario[itemUsuario] > 0) {
//     inventario[itemUsuario] -= 1
//     console.log('Você usou um ' + itemUsuario + '. Quantidade restante: ' + inventario[itemUsuario])
// }
// else {
//     console.log('Item esgotado: ' + itemUsuario)
// }

// 5. Crie um objeto representando o orçamento mensal de uma pessoa, com
// categorias como alimentação, transporte, lazer e saúde, cada uma com valor
// planejado e valor gasto. Use for...in para percorrer as categorias e exibir se cada
// uma ficou dentro ou acima do orçamento, e calcule o saldo geral do mês.

let orcamento = {
    alimentacao: { planejado: 1000, gasto: 1200 },
    transporte: { planejado: 500, gasto: 450 },
    lazer: { planejado: 300, gasto: 350 },
    saude: { planejado: 200, gasto: 150 }
}

for (const categoria in orcamento) {
    let planejado = orcamento[categoria].planejado
    let gasto = orcamento[categoria].gasto

    if (gasto <= planejado) {
        console.log(categoria + ': Dentro do orçamento. Planejado: R$' + planejado + ', Gasto: R$' + gasto)
    }
    else {
        console.log(categoria + ': Acima do orçamento! Planejado: R$' + planejado + ', Gasto: R$' + gasto)
    }
}

let saldoGeral = 0
for (const categoria in orcamento) {
    saldoGeral += (orcamento[categoria].planejado - orcamento[categoria].gasto)
}
console.log('Saldo geral do mês: R$' + saldoGeral)

// 6. Crie um array de objetos representando músicas, cada uma com título, artista e
// duração em segundos. Use for...of para exibir cada música no formato "Artista —
// Título (mm:ss)". Ao final, use forEach para somar a duração total e exiba-a no
// mesmo formato.

let musicas = [
    { titulo: "I Love New York", artista: "Madonna", duracao: 251},
    { titulo: "Maneater", artista: "Nelly Furtado", duracao: 258},
    { titulo: "É de Chocolate", artista: "Xuxa", duracao: 299}
];

for (const musica of musicas) {
    let mm =
    let ss =
    console.log(musica.titulo + " - " + musica.titulo + )
}