const prompt = require('prompt-sync')()
/*const prompt = require('prompt-sync')()

let tempCelsius

tempCelsius = Number(prompt("Entre com a temperatura em graus celsius: "))

let tempFarenheit = (tempCelsius * 1.8) + 32

console.log('Temperatura em Celsius: ' + tempCelsius)
console.log('Temperatura em Farenheit: ' + tempFarenheit)


// console.error() - dispara uma msg de erro

 Escreva um algoritmo para ler o número de eleitores de um município, o número de
votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa
em relação ao total de eleitores.

let numEleitores = Number(prompt('Entre com o numero total de eleitores: '))
let numVotosBrancos = Number(prompt('Entre com o numero de votos brancos: '))
let numVotosNulos = Number(prompt('Entre com o numero de votos nulos: '))
let numVotosValidos = Number(prompt('Entre com o numero de votos validos: '))

let percentualBrancos = (numVotosBrancos / numEleitores) * 100
let percentualNulos = (numVotosNulos / numEleitores) * 100
let percentualValidos = (numVotosValidos / numEleitores) * 100

console.log('Percentual de votos brancos: ' + percentualBrancos.toFixed(2) + '%')
console.log('Percentual de votos nulos: ' + percentualNulos.toFixed(2) + '%')
console.log('Percentual de votos validos: ' + percentualValidos.toFixed(2) + '%')


for(let i = 1000; i <= 1999; i++) {
    if(i % 11 == 5) {
        console.log(i)
    }
}

Escreva um programa para calcular a redução do tempo de vida de um fumante.
Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos d5
ias de
vida um fumante perderá e exiba o total em dias.

let qtdCigarrosFumadosDia = Number(prompt('Entre com a quantidade de cigarros fumados por dia: '))
let qtdAnosFumante = Number(prompt('Entre com a quantidade de anos que o fumante já fumou: '))

let qtdCigarrosFumados = qtdAnosFumante * 365 * qtdCigarrosFumadosDia
let qtdMinutosVidaPerdidos = qtdCigarrosFumados * 10
let qtdDiasPerdidos = qtdMinutosVidaPerdidos / 1440

console.log('Quantidade de dias que o fumante perderá: ' + qtdDiasPerdidos.toFixed(2) + ' dias.')


let macasCompradas = Number(prompt('Entre com o numero de maçãs compradas: '))

if (macasCompradas < 12) {
    console.log('Cada maçã custa R$ 0,30. Valor total da venda das maçãs: R$' + macasCompradas.toFixed(2) * 0.30)
}
else {
    console.log('Cada maçã custa R$ 0,25. Valor total da venda das maçãs: R$' + macasCompradas.toFixed(2) * 0.25)
}

*/

let array = [100, 2, 5, 10, 12, 30]
let soma = 0
let maior, menor
maior = array[0]
menor = array[0]

for (i = 0; i < array.length; i++){
    soma = soma + array[i]
    if (maior < array[i]) {
        maior = array[i]
    }
    if (menor > array[i]) {
        menor = array[i]
    }
}

let media = soma / array.length

console.log('Soma de todos os elementos do array: ' + soma)
console.log('Média de todos os elementos do array: ' + media)
console.log('Maior valor do array: ' + maior)
console.log('Menor valor do array: ' + menor)