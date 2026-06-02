// switch case
const prompt = require('prompt-sync')()

let primeiroValor = Number(prompt('Insira o primeiro valor: '))
let segundoValor = Number(prompt('Insira o segundo valor: '))

let opcao = Number(prompt('Escolha a operação desejada: \n1 - Soma\n2 - Subtração \n3 - Multiplicação \n4 - Divisão '))

switch (opcao) {
    case 1: 
        console.log('Resultado:', Number(primeiroValor) + Number(segundoValor))
        break
    case 2:
        console.log('Resultado:', Number(primeiroValor) - Number(segundoValor))
        break
    case 3:
        console.log('Resultado:', Number(primeiroValor) * Number(segundoValor))
        break
    case 4:
        console.log('Resultado:', Number(primeiroValor) / Number(segundoValor))
        break
    default:
        console.log('Opção inválida')
}

// estudos
// desafio 1

let opcao = String(prompt('Escolha a opção de bebida desejada para saber o preço: \nCafé\nLeite \nSuco \nRefrigerante '))

switch (opcao) {
    case 'Cafe':
        console.log('O preço do café é R$ 3,50')
        break
    case 'Leite':
        console.log('O preço do leite é R$ 2,00')
        break
    case 'Suco':
        console.log('O preço do suco é R$ 5,00')
        break
    case 'Refrigerante':
        console.log('O preço do refrigerante é R$ 4,50')
        break
    default:
        console.log('Opção inválida')
}

// desafio 2

let mes = Number(prompt('Digite o número do mês (1-12): '))

switch (mes) {
    case 12:
    case 1:
    case 2:
        console.log('A estação do ano é: Verão')
        break
    case 3:
    case 4:
    case 5:
        console.log('A estação do ano é: Outono')
        break
    case 6:
    case 7:
    case 8:
        console.log('A estação do ano é: Inverno')
        break
    case 9:
    case 10:
    case 11:
        console.log('A estação do ano é: Primavera')
        break
    default:
        console.log('Número do mês inválido')
}

// desafio 3

let valorTotalCompra = Number(prompt('Digite o valor total da compra: '))
let corCartao = String(prompt('Digite a cor do cartão (Bronze, Prata, Ouro ou Platina): '))

switch (corCartao) {
    case 'Bronze':
        console.log('Desconto aplicado: 5%')
        console.log('Valor final da compra: R$ ' + (valorTotalCompra * 0.95).toFixed(2))
        break
    case 'Prata':
        console.log('Desconto aplicado: 10%')
        console.log('Valor final da compra: R$ ' + (valorTotalCompra * 0.90).toFixed(2))
        break
    case 'Ouro':
        console.log('Desconto aplicado: 15%')
        console.log('Valor final da compra: R$ ' + (valorTotalCompra * 0.85).toFixed(2))
        break
    case 'Platina':
        console.log('Desconto aplicado: 25%')
        console.log('Valor final da compra: R$ ' + (valorTotalCompra * 0.75).toFixed(2))
        break
    default:
        console.log('Cor do cartão inválida')
}
