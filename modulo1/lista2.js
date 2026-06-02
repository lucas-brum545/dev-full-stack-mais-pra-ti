const prompt = require('prompt-sync')()

// 1. Peça ao usuário um número e exiba sua tabuada completa (de 1 a 10) usando um
// laço for. Em seguida, pergunte se ele deseja ver outra tabuada e repita enquanto
// a resposta for "sim".

let opcao
do {
    let numero = Number(prompt('Entre com um número desejado para a tabuada: '))

    for (let i = 1; i <= 10; i++) {
        console.log(numero + ' * ' + i + ' = ' + i * numero)
    }

    opcao = prompt('Deseja ver outra tabuada? ')
}while(opcao === 'sim')

// 2. Leia um número inteiro positivo e, usando um laço while, calcule e exiba quantos
// dígitos ele possui. Trate o caso do número zero (que possui 1 dígito).

let numero = Number(prompt('Entre com um número: '))

if (numero === 0) {
    console.log(numero + ' tem apenas 1 dígito.')
}
else {
    let contador = 0
    let numeroOriginal = numero
    while (numero > 0) {
        numero = Math.floor(numero / 10)
        contador++
    }
    console.log('O número ' + numeroOriginal + ' tem ' + contador + ' dígitos.')
}

// 3. Peça ao usuário quantos termos da sequência de Fibonacci deseja ver e exiba-os
// usando um laço for. Exemplo: 1, 1, 2, 3, 5, 8, 13…

let termos = Number(prompt('Entre com o número de termos da sequência de Fibonacci que deseja ver: '))
let a = 1, b = 1

console.log('Sequência de Fibonacci:')
for (let i = 1; i <= termos; i++) {
    console.log(a)
    let temp = a
    a = b
    b = temp + b
}

// 4. Defina uma senha fixa no código. Peça ao usuário que a digite e, usando um laço
// do...while, permita no máximo 3 tentativas. Exiba se ele acertou ou se esgotou as
// tentativas.

let senhaFixa = 'b@)18910cA'
let numeroTentativas = 0
let senha

do {
    senha = prompt('Entre com a senha: ')
    if (senha === senhaFixa) {
        console.log('Senha correta! Acesso concedido.')
        break
    } else {
        numeroTentativas++
        console.log('Senha incorreta. Tente novamente.')
    }
} while (numeroTentativas < 3)
    
if (numeroTentativas === 3) {
    console.log('Número de tentativas permitidas excedidas!')
}

// 5. Leia um número N e exiba todos os números primos entre 2 e N usando laços
// aninhados (for dentro de for). Exiba também a quantidade total de primos
// encontrados.

let N = Number(prompt('Entre com um número: '))

console.log('Números primos entre 2 e ' + N + ':')
let contadorPrimos = 0
for (let i = 2; i <= N; i++) {
    let primo = true
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            primo = false
            break
        }
    }
    if (primo) {
        console.log(i)
        contadorPrimos++
    }
}
console.log('Quantidade total de primos encontrados: ' + contadorPrimos)

// 6. Crie um array e leia via laço o nome e a nota de 5 alunos. Ao final, exiba: a média
// da turma, o nome do aluno com maior nota e o nome do aluno com menor nota.
// Não use funções prontas como Math.max()

let notasTurma = []

for (let i = 0; i < 5; i++){
    let nome = prompt('Entre com o nome do aluno: ')
    let nota = Number(prompt('Entre com a nota do aluno: '))
    notasTurma.push({ nome, nota })
}

let soma = 0
let alunoMaiorNota = notasTurma[0]
let alunoMenorNota = notasTurma[0]

notasTurma.forEach(({ nome, nota }) => {
    soma += nota
    if (nota > alunoMaiorNota.nota) {
        alunoMaiorNota = { nome, nota }
    }
    if (nota < alunoMenorNota.nota) {
        alunoMenorNota = { nome, nota }
    }
})

let media = soma / notasTurma.length

console.log('============ RELATÓRIO DAS NOTAS DA TURMA ============')
console.log('Média das notas da turma: ' + media.toFixed(2))
console.log('Aluno com maior nota: ' + alunoMaiorNota.nome)
console.log('Aluno com menor nota: ' + alunoMenorNota.nome)

// 7. Simule um carrinho de compras: leia nomes e preços de produtos em um laço até
// o usuário digitar "sair". Armazene em arrays. Ao final, liste todos os itens, exiba o
// subtotal, aplique 10% de desconto se houver mais de 3 itens e mostre o total a
// pagar.

let valorTotal = 0
let contItens = 0

let compra = []

let nomeProduto

do {
    nomeProduto = prompt('Entre com o nome do produto desejado: ')
    if (nomeProduto != 'sair') {
        let valorProduto = parseFloat(prompt('Entre com o valor do produto: '))
        valorTotal = valorTotal + valorProduto
        contItens++
        compra.push({nomeProduto, valorProduto})
    }
} while (nomeProduto != 'sair')

console.log('============= NOTA FISCAL ===========')
console.log('NOME // PREÇO')
for (let i = 0; i < compra.length; i++){
    let item = compra[i];
    console.log(`${item.nomeProduto} // R$ ${item.valorProduto.toFixed(2)}`);
}

let somaSubtotal = 0
compra.forEach(({ nomeProduto, valorProduto }) => {
    somaSubtotal += valorProduto
})
console.log('SUBTOTAL DO PEDIDO: R$' + somaSubtotal.toFixed(2))

if (contItens > 3) {
    console.log('DESCONTO DE 10% A SER APLICADO')
    let valorComDesconto = somaSubtotal - (somaSubtotal * 0.1)
    console.log('TOTAL DO PEDIDO: R$' + valorComDesconto.toFixed(2))
}
else {
    console.log('TOTAL DO PEDIDO: R$' + somaSubtotal.toFixed(2))
}

// 8. Leia uma palavra, armazene seus caracteres em um array e, percorrendo-o de
// trás para frente com um laço for, monte a palavra invertida. Exiba a palavra
// original, a invertida e informe se ela é um palíndromo.

let palavra = []
let palavraInvertida = []

let pal = prompt('Digite uma palavra: ')

for (let i = 0; i < pal.length; i++) {
    palavra.push(pal[i])
}

for (let i = palavra.length - 1; i >= 0; i--) {
    palavraInvertida.push(palavra[i])
}

let palavraInvertidaString = palavraInvertida.join('')
console.log('Palavra original: ' + pal)
console.log('Palavra invertida: ' + palavraInvertidaString)
if (palavraInvertidaString === pal) {
    console.log('A palavra é um palíndromo!')
} else {
    console.log('A palavra não é um palíndromo.')
}

// 9. Sorteie um número entre 1 e 100 com Math.random(). Usando um laço do...while,
// peça ao usuário para adivinhar; a cada tentativa, diga se o número é maior ou
// menor. Registre as tentativas em um array e, ao acertar, exiba o histórico e quantas tentativas foram necessárias.

let numASerAdivinhado = Math.floor(Math.random() * 100) + 1
let tentativas = []
let num

do {
    num = Number(prompt('Entre com um número de 1 a 100: '))
    if (num != numASerAdivinhado) {
        if (num > numASerAdivinhado) {
            console.log('O número a ser adivinhado é menor que ' + num)
            tentativas.push(num)
        }
        else {
            console.log('O número a ser adivinhado é maior que ' + num)
            tentativas.push(num)
        }
    }
} while (num != numASerAdivinhado)
console.log(numASerAdivinhado + ' - Parabéns, você acertou!')
console.log('======= RELATÓRIO =======')
for (let i = 0; i < tentativas.length; i++){
    console.log(tentativas[i])
}
console.log('Número de tentativas: ' + tentativas.length)

// 10. Crie uma matriz 3×4 (3 alunos, 4 notas cada). Leia os valores via laços aninhados.
// Calcule e exiba a média de cada aluno, a média geral da turma e qual aluno teve
// o melhor desempenho.

let matriz_notas = []

for (let i = 0; i < 4; i++) {
    matriz_notas[i] = []
    for (let j = 0; j < 3; j++) {
        matriz_notas[i][j] = parseFloat(Number(prompt('Entre com uma nota: ')))
    }
}

let somaGeral = 0;
let melhorDesempenho = -1; // Começa com um valor baixo
let alunoMelhorDesempenho = 0;

for (let i = 0; i < 4; i++) {
    let somaAluno = 0;
    for (let j = 0; j < 3; j++) {
        somaAluno += matriz_notas[i][j];
        if (matriz_notas[i][j] > melhorDesempenho) {
            melhorDesempenho = matriz_notas[i][j];
            alunoMelhorDesempenho = i + 1;
        }
    }
    console.log('Média do aluno ' + (i + 1) + ': ' + (somaAluno / 3).toFixed(2));
    somaGeral += somaAluno;
}

let mediaGeral = somaGeral / (4 * 3);
console.log('Média geral da turma: ' + mediaGeral.toFixed(2));
console.log('Melhor nota: ' + melhorDesempenho + ' (Aluno ' + alunoMelhorDesempenho + ')');