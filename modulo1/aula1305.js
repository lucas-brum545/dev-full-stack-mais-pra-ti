// funcoes

function soma(a, b){
    return a + b
}

function soma(a, b){
    console.log(a + b)
}

const subtrair = function(a, b){
    return a - b
}

// arrow function
const multiplicar = (a, b) => console.log(a * b)
multiplicar(2,10)

// objetos

// exercicio

function soma_array(array) {
    let soma = 0

    for (let i = 0;i<array.length;i++){
        soma = soma + array[i]
    }

    return soma
}

function media_array(array) {
    return soma_array(array) / array.length
}

function maior_valor_array(array) {
    let maior = array[0]

    for (let i = 0; i < array.length; i++){
        if (array[i] > maior) {
            maior = array[i]
        }
    }

    return maior
}

function menor_valor_array(array) {
    let menor = array[0]

    for (let i = 0; i < array.length; i++){
        if (array[i] < menor) {
            menor = array[i]
        }
    }

    return menor
}

let array = [10, 30, 90, 1, 3, 23]

for (let i = 0; i < array.length; i++){
    console.log(array[i])
}

console.log('Soma dos elementos do array: ' + soma_array(array))
console.log('Media dos valores do array: ' + media_array(array).toFixed(2))
console.log('Maior valor do array: ' + maior_valor_array(array))
console.log('Menor valor do array: ' + menor_valor_array(array))