const prompt = require('prompt-sync')();

let livros = []
let relatorioCategorias = []

// funcao add livro

/* Uma função que recebe os dados e adiciona um novo livro ao array */

function adicionaLivro(livro){
    livros.push(livro)
}

// listar acervo com foreach

function listarAcervo(){
    livros.forEach((livro) => {
    console.log(livro.id + ' - ' + livro.titulo + ', ' + livro.autor + ', ' + livro.categoria)
    if(livro.estaEmprestado){
        console.log('Emprestado')
    }
    else{
        console.log('Disponível')
    }
})
}

// buscar por autor (filter)

/*Buscar por Autor: Crie uma função que filtre (use filter) e retorne todos os livros de um autor específico.*/
function buscaAutorLivros(livros, nome_autor){
    return livros.filter(livro => livro.autor === nome_autor)
}

// emprestar livro

/* Emprestar Livro: Crie uma função que busque um livro pelo id (use find) e altere o status estaEmprestado para true. Se o livro já estiver emprestado, exiba uma mensagem de erro
*/

function emprestarLivro(id){
    let livro = livros.find(l => l.id === id)
    if(livro){
        if(livro.estaEmprestado){
            console.error('Erro: Livro ' + livro.titulo + ' já está emprestado.')
        }
        else{
            console.log('Livro emprestado com sucesso!')
            livro.estaEmprestado = true
        }
    }
    else{
        console.log('Livro não encontrado.')
    }
}

// devolver livro

function devolverLivro(id){
    let livro = livros.find(l => l.id === id)
    if(livro){
        if(livro.estaEmprestado){
            console.log('Livro devolvido com sucesso!')
            livro.estaEmprestado = false
        }
        else{
            console.error('Erro: livro ' + livro.titulo + ' já devolvido!')
        }
    }
    else{
        console.log('Livro não encontrado.')
    }
}

// desafio extra

/* Implemente uma função que retorne a quantidade de livros por categoria, usando um objeto para fazer a contagem (ex: { Ficção: 2, História: 1 }). */
function qtdLivrosCategoria(){
    livros.forEach((livro) => {
        if(relatorioCategorias[livro.categoria]){
            relatorioCategorias[livro.categoria]++
        }
        else{
            relatorioCategorias[livro.categoria] = 1
        }
    })
}


function exibeQtdLivrosCategoria(){
    Object.keys(relatorioCategorias).forEach((categoria) => {
        console.log(categoria + ': ' + relatorioCategorias[categoria])
    })
}

let opcao

do{
    opcao = prompt('Deseja adicionar um livro? (sim/não) ')
    if(opcao === 'sim'){
        let titulo = prompt('Digite o título do livro: ')
        let autor = prompt('Digite o nome do autor: ')
        let categoria = prompt('Digite a categoria do livro: ')
        let id = livros.length + 1 // gera um id simples baseado no tamanho do array
        let livro = { id, titulo, autor, categoria, estaEmprestado: false }
        adicionaLivro(livro)
    }
}while(opcao != 'não')

let sair = false

do{
    console.log('========= SISTEMA DE GESTÃO DE BIBLIOTECA =========')
    console.log('1 - Exibir acervo')
    console.log('2 - Busca por autor')
    console.log('3 - Pegar livro emprestado')
    console.log('4 - Devolver livro emprestado')
    console.log('5 - Encerrar sistema')

    let op = Number(prompt('Entre com a opção desejada: '))
    switch(op){
        case 1:
            listarAcervo()
            break
        case 2:
            let nomeAutor = prompt('Digite o nome do autor que deseja procurar: ')
            let livrosNomeAutor = []
            livrosNomeAutor = buscaAutorLivros(livros, nomeAutor)
            for(let i=0; i < livrosNomeAutor.length;i++){
                console.log(livrosNomeAutor[i].id + ' - ' + livrosNomeAutor[i].titulo + ', ' + livrosNomeAutor[i].autor + ', ' + livrosNomeAutor[i].categoria)
            }
            break
        case 3:
            let idLivroEmprestar = Number(prompt('Entre com o id do livro que deseja pegar emprestado: '))
            emprestarLivro(idLivroEmprestar)
            break
        case 4:
            let idLivroDevolver = Number(prompt('Entre com o id do livro que deseja devolver: '))
            devolverLivro(idLivroDevolver)
            break
        case 5:
            console.log('Sistema encerrado! Até mais!')
            sair = true
            break
        default:
            console.log('Opção inválida! Tente novamente!')
    }
}while(!sair)

qtdLivrosCategoria()
exibeQtdLivrosCategoria()
