const prompt = require('prompt-sync')()
const readlineSync = require('readline-sync')

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

// let orcamento = {
//     alimentacao: { planejado: 1000, gasto: 1200 },
//     transporte: { planejado: 500, gasto: 450 },
//     lazer: { planejado: 300, gasto: 350 },
//     saude: { planejado: 200, gasto: 150 }
// }

// for (const categoria in orcamento) {
//     let planejado = orcamento[categoria].planejado
//     let gasto = orcamento[categoria].gasto

//     if (gasto <= planejado) {
//         console.log(categoria + ': Dentro do orçamento. Planejado: R$' + planejado + ', Gasto: R$' + gasto)
//     }
//     else {
//         console.log(categoria + ': Acima do orçamento! Planejado: R$' + planejado + ', Gasto: R$' + gasto)
//     }
// }

// let saldoGeral = 0
// for (const categoria in orcamento) {
//     saldoGeral += (orcamento[categoria].planejado - orcamento[categoria].gasto)
// }
// console.log('Saldo geral do mês: R$' + saldoGeral)

// 6. Crie um array de objetos representando músicas, cada uma com título, artista e
// duração em segundos. Use for...of para exibir cada música no formato "Artista —
// Título (mm:ss)". Ao final, use forEach para somar a duração total e exiba-a no
// mesmo formato.

// let musicas = [
//     { titulo: "I Love New York", artista: "Madonna", duracao: 251},
//     { titulo: "Maneater", artista: "Nelly Furtado", duracao: 258},
//     { titulo: "É de Chocolate", artista: "Xuxa", duracao: 299}
// ];

// for (const musica of musicas) {
//     let mm = Math.floor(musica.duracao / 60)
//     let ss = musica.duracao - mm*60
//     console.log(musica.titulo + " - " + musica.titulo + " (" + mm + ":" + ss + ")")
// }

// 7.  Crie um array de objetos com nome e nota de 6 alunos. Use for...of para classificar 
// cada  aluno  (Aprovado,  Recuperação  ou  Reprovado)  e  exibir  o  resultado.  Use 
// forEach para calcular e exibir separadamente a média dos aprovados e a média 
// dos reprovados.

// let turma = [
//     {nome:'Lucas', nota: 6},
//     {nome:'Maria', nota: 7},
//     {nome:'Luiz', nota: 8.5},
//     {nome:'João', nota: 4.7},
//     {nome:'Tânia', nota: 8},
//     {nome:'Joana', nota: 3.3}
// ]

// for (const aluno of turma) {
//     console.log('Nome do aluno: ' + aluno.nome + ' Nota do aluno: ' + aluno.nota)
//     if (aluno.nota >= 6) {
//         console.log('Aprovado')
//     }
//     else if (aluno.nota >= 4 && aluno.nota < 6) {
//         console.log('Recuperação')
//     }
//     else {
//         console.log('Reprovado')
//     }
// }  

// let somaAprovados = 0
// let contAprovados = 0
// let somaReprovados = 0
// let contReprovados = 0

// turma.forEach(({nota}) => {
//      if(nota >= 6){
//         somaAprovados += nota
//         contAprovados++
//      }
//      else if(nota < 4){
//          somaReprovados += nota
//          contReprovados++
//      }
// })

// let mediaAprovados = somaAprovados / contAprovados
// let mediaReprovados = somaReprovados / contReprovados

// console.log('Média dos alunos aprovados: ' + mediaAprovados.toFixed(2))
// console.log('Média dos alunos reprovados: ' + mediaReprovados.toFixed(2))

// 8.  Crie um array de objetos representando produtos com nome, preço e quantidade. 
// Use  forEach  para  calcular  o  valor  total  em  estoque  de  cada  produto  (preço × 
// quantidade)  e  exibir  um  relatório.  Ao  final,  exiba  o  valor  total  geral  de  todo  o 
// estoque. 

// let estoqueProdutos = [
//     {nome: 'Shampoo', preco: 9.99, quantidade: 300},
//     {nome: 'Sabonete', preco: 2.99, quantidade: 400},
//     {nome: 'Condicionador', preco: 9.99, quantidade: 400},
//     {nome: 'Banana', preco: 6.99, quantidade: 300},
//     {nome: 'Maçã', preco: 2.99, quantidade: 400},
//     {nome: 'Tomate', preco: 7.99, quantidade: 300}
// ]


// let somaTotalGeral = 0

// estoqueProdutos.forEach(({nome, preco, quantidade}) => {
//     somaTotalProduto = preco*quantidade
//     console.log('Valor total em estoque de ' + nome + ': R$ ' + somaTotalProduto.toFixed(2))
//     somaTotalGeral+=somaTotalProduto
// })

// console.log('Valor total geral dos produtos: R$' + somaTotalGeral.toFixed(2))

// 9.  Crie  um  array  de  objetos onde cada objeto representa um contato com nome, 
// telefone e e-mail. Use forEach para listar todos os contatos formatados. Permita 
// buscar  um  contato  pelo nome usando for...of e exiba os dados encontrados ou 
// uma mensagem de "não encontrado". 

let contatos = [
    {nome: 'Lucas', telefone: '(11) 1111-1111', email:'lucas@obaoba.com'},
    {nome: 'João', telefone: '(22) 2222-2222', email:'joao14@hotmail.com'},
    {nome: 'Jussara', telefone: '(33) 3333-3333', email:'jussaraaaaa@obaoba.com'}
]

console.log('// NOME // TELEFONE // E-MAIL //')
contatos.forEach(({nome, telefone, email}) => {
    console.log('// ' + nome + ' // ' + telefone + ' // ' + email + ' //')
})

let nomeProcurado = readlineSync.question('Digite o nome do contato a ser procurado: ')
let encontrado = false
let contatoEncontrado = null

for (const contato in contatos){
    if(nomeProcurado === contato.nome){
        contatoEncontrado = contato
        encontrado = true
        break
    }
}

if(encontrado){
    console.log('Contato encontrado!')
    console.log('|   ' + contatoEncontrado.nome + '  |  ' + contatoEncontrado.telefone + '  |  ' + contatoEncontrado.email + '  |')
}
else{
    console.log('Contato não encontrado!')
}

// 10.  Implemente  uma  pilha  usando  um  array  para  simular  o  histórico  de  um 
// navegador. Crie as funções visitar(pagina) (push), voltar() (pop) e paginaAtual() 
// (peek). Simule uma sessão: visite 4 páginas, volte 2 vezes e exiba a página atual a 
// cada operação. 

// let paginasWeb = [
//     'Página 1',
//     'Página 2',
//     'Página 3',
//     'Página 4',
//     'Página 5'
// ]

// let historico = []

// function visitar(pagina) {
//     historico.push(pagina)
//     console.log('Visitando: ' + pagina)
// }

// function voltar() {
//     if (historico.length > 0) {
//         const paginaAnterior = historico.pop()
//         console.log('Voltando de: ' + paginaAnterior)
//     } else {
//         console.log('Não há páginas para voltar!')
//     }
// }

// function paginaAtual() {
//     if (historico.length > 0) {
//         const paginaAtual = historico[historico.length - 1]
//         console.log('Página atual: ' + paginaAtual)
//     }
//     else {
//         console.log('Nenhuma página visitada!')
//     }
// }

// visitar('Página 1')
// paginaAtual()
// visitar('Página 2')
// paginaAtual()
// visitar('Página 3')
// paginaAtual()
// visitar('Página 4')
// paginaAtual()

// voltar()
// paginaAtual()
// voltar()
// paginaAtual()

// 11.  Implemente  uma  fila  usando  um  array  para  simular  o  atendimento  de  uma 
// clínica.  Crie  as  funções  chegarPaciente(nome)  (enqueue),  chamarProximo() 
// (dequeue) e exibirFila(). Simule a chegada de 5 pacientes e o atendimento de 3, 
// exibindo o estado da fila a cada operação. 

// let filaAtendimentoClinica = []

// function chegarPaciente(nome){
//     filaAtendimentoClinica.push(nome)
// }

// function chamarProximo(){
//     filaAtendimentoClinica.shift()
// }

// function exibirFila(){
//     console.log('Estado da fila: ')
//     for (let i = 0; i < filaAtendimentoClinica.length; i++) {
//         console.log(i+1 + 'º - ' + filaAtendimentoClinica[i])
//     }
// }

// chegarPaciente('Priscila')
// exibirFila()
// chegarPaciente('Júnior')
// exibirFila()
// chegarPaciente('Rodrigo')
// exibirFila()
// chegarPaciente('Maria')
// exibirFila()
// chegarPaciente('Lucas')
// exibirFila()

// chamarProximo()
// exibirFila()
// chamarProximo()
// exibirFila()
// chamarProximo()
// exibirFila()

// 12.  Implemente  uma  lista  ligada  simples  usando  nós  ({  valor,  proximo  }).  Crie  as 
// funções  adicionar(tarefa),  remover(tarefa)  e  exibir() que percorre todos os nós. 
// Simule um gerenciador de tarefas: adicione 4 tarefas, remova uma pelo nome e 
// exiba a lista antes e depois. 

// class No{
//     constructor(valor){
//         this.valor = valor
//         this.proximo = null
//     }
// }

// class ListaSimpEncad{
//     constructor(){
//         this.inicio = null
//     }

//     adicionar(valor) {
//         const novoNo = new No(valor)
//         if(!this.inicio){
//             this.inicio = novoNo
//         }
//         else{
//             let aux = this.inicio
//             while(aux.proximo){
//                 aux = aux.proximo
//             }
//             aux.proximo = novoNo
//         }
//     }

//     remover(valor) {
//         if(!this.inicio) return
//         if(valor === this.inicio.valor){
//             this.inicio = this.inicio.proximo
//         }
//         let aux = this.inicio
//         while(aux.proximo && aux.proximo.valor != valor){
//             aux = aux.proximo
//         }
//         if(aux.proximo){
//             aux.proximo = aux.proximo.proximo
//         }
//     }

//     exibir(){
//         let aux = this.inicio
//         console.log('Lista: ')
//         while(aux){
//             console.log('* ' + aux.valor)
//             aux = aux.proximo
//         }
//     }
// }
// let listaTarefas = new ListaSimpEncad()
// listaTarefas.adicionar('Tarefa 1')
// listaTarefas.adicionar('Tarefa 2')
// listaTarefas.adicionar('Tarefa 3')
// listaTarefas.adicionar('Tarefa 4')
// listaTarefas.exibir()
// listaTarefas.remover('Tarefa 3')
// listaTarefas.exibir()
