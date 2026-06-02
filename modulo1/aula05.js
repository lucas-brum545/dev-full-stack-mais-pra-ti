// tabuada

const prompt = require('prompt-sync')()

// let num = Number(prompt('Entre com um número: '))
// let indice = 1
// while (indice <= 10) {
//     console.log(num + ' * ' + indice + ' = ' + indice * num)
//     indice++
// }

let soma = 0
let num
do {
    num = Number(prompt('Entre com um número (0 para sair): '))
    soma += num
} while (num !== 0)

console.log('A soma dos números é: ' + soma)