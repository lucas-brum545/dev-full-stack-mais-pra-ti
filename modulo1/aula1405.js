// objetos

// - estrutura que possui caracteristicas comportamento e um estado

let livro = {
    titulo: "A Montanha Mágica",
    autor: "Thomas Mann",
    tema: "Clássico"
}

// let frutas = ['Maçã', 'Uva', 'Banana']

for(const chave in livro){
    console.log(livro[chave])
}

for (const [chave, valor] of Object.entries(livro)) {
    console.log(chave + ': ' + valor)
}


/* criar um objeto carro com for in para imprimir no formato 'chave: valor' */

let carro = {
    marca: 'Ford',
    modelo: 'Focus',
    ano: 2000,
    cor: 'Preto'
}

for(let chave in carro){
    console.log(chave + ': ' + carro[chave])
}

/* criar um array e cidades, imprimir apenas as cidades que começam com letra 'S' usando for of */

let cidades = ['Osasco', 'Porto Alegre', 'Sapucaia do Sul']

for (const cidade of cidades) {
     if (cidade.startsWith('S')) {
         console.log(cidade)
     }
}

/* criar um array de numeros e usar forEach para somar todos os numeros*/

let arr = [15, 20, 100, 10]

soma = 0

arr.forEach((numero) => soma += numero)

console.log(soma)

const turma = [
  { nome: 'Alice',   nota: 9.0 },
  { nome: 'Bruno',   nota: 5.5 },
  { nome: 'Carla',   nota: 7.0 },
  { nome: 'Daniel',  nota: 3.8 },
  { nome: 'Elisa',   nota: 8.2 },
];



let aprovados = []
let reprovados = []

soma = 0
turma.forEach(({ nome, nota }) => {
    soma += nota
    if (nota >= 6) {
        aprovados.push(nome)
    }
    else {
        reprovados.push(nome)
    }
})

media = soma / turma.length

console.log('================ RELATÓRIO ================')
console.log('Média geral das notas dos alunos: ' + media)
console.log('Lista de Aprovados: ')
console.log(aprovados)
console.log('Lista de Reprovados: ')
console.log(reprovados)