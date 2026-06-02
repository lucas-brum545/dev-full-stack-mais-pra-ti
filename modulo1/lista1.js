const prompt = require('prompt-sync')()


// 1. Escreva um programa que pergunte a nota de um aluno (de 0 a 10). Exiba se o
// aluno foi Aprovado (nota maior ou igual a 7), em Recuperação (nota entre 5 e 6.9)
// ou Reprovado (nota menor que 5).



let nota = parseFloat(prompt('Digite a nota do aluno (0 a 10): '));

if (nota >= 7) {
    console.log('Aluno aprovado!')
}
else if (nota >= 5 && nota <= 6.9) {
    console.log('Aluno em Recuperação.')
}
else {
    console.log('Aluno Reprovado.')
}

// 2. Crie um programa que pergunte o ano de nascimento de uma pessoa e calcule
// sua idade. Com base na idade, exiba se ela é criança (até 12 anos), adolescente
// (de 13 a 17 anos), adulta (de 18 a 59 anos) ou idosa (60 anos ou mais)


let anoNascimento = Number(prompt('Entre com seu ano de nascimento: '))

let anos = 2026 - anoNascimento

if (anos <= 12) {
    console.log('Você é uma criança.')
}
else if (anos >= 13 && anos <= 17) {
    console.log('Você é adolescente.')
}
else if (anos >= 18 && anos <= 59) {
    console.log('Você é um adulto.')
}
else {
    console.log('Você é um/uma idoso(a).')
}

// 3. Escreva um programa que pergunte o salário mensal de um funcionário e o
// percentual de aumento concedido pela empresa. Caso o salário seja menor que
// R$ 1.500,00, o percentual de aumento deve ser dobrado automaticamente. Exiba o
// novo salário do funcionário


let salario = parseFloat(prompt('Entre com seu salario: '))
let percentual = parseFloat(prompt('Entre com o percentual de aumento concedido pela empresa: '))

if (salario < 1.500) {
    percentual *= 2
}

novoSalario = salario + (salario * percentual / 100)
console.log('Seu novo salário: R$' + novoSalario)

// 4. Crie um programa que leia três números inteiros e exiba o maior deles, sem utilizar
// funções prontas como Math.max()

let val1 = Number(prompt('Entre com o primeiro numero inteiro: '))
let val2 = Number(prompt('Entre com o segundo numero inteiro: '))
let val3 = Number(prompt('Entre com o terceiro numero inteiro: '))
let maior

if (val1 > val2 && val1 > val3) {
    maior = val1
}
if (val2 > val3 && val2 > val1) {
    maior = val2
}
if (val3 > val2 && val3 > val1) {
    maior = val3
}

console.log('Maior valor informado: ' + maior)

// 5. Uma loja oferece desconto progressivo conforme o valor da compra. Faça um
// programa que leia o valor total de uma compra e aplique as seguintes regras:
// compras abaixo de R$ 100,00 não têm desconto; compras entre R$ 100,00 e R$
// 299,99 recebem 10% de desconto; compras entre R$ 300,00 e R$ 499,99 recebem
// 15% de desconto; compras acima de R$ 500,00 recebem 20% de desconto. Exiba o
// valor original, o desconto aplicado e o valor final a pagar.

let valorCompra = parseFloat(prompt('Entre com o valor total da compra: '))
let valorDesconto

if (valorCompra >= 100 && valorCompra <= 299.99) {
    valorDesconto = 10
}
else if(valorCompra >= 300 && valorCompra <= 499.99){
    valorDesconto = 15
}
else if (valorCompra > 500) {
    valorDesconto = 20
}
let novoValorCompra = valorCompra - (valorCompra * (valorDesconto / 100))

console.log('============ NOTA DE COMPRA ===========')
console.log('Valor da compra: R$' + valorCompra)
console.log('Desconto aplicado: ' + valorDesconto + '%')
console.log('Total: R$' + novoValorCompra)

// 6. Crie um programa de caixa eletrônico simplificado. O usuário informa o valor que
// deseja sacar (múltiplo de 10). O programa deve calcular e exibir a menor
// quantidade possível de cédulas de R$ 100, R$ 50, R$ 20 e R$ 10 necessárias para
// compor o saque

let valorSaque = parseFloat(prompt('Entre com o valor para saque (múltiplo de 10): '))

console.log(`=== PROCESSANDO SAQUE DE R$ ${valorSaque} ===`);

// 3. Lógica de distribuição das cédulas (Algoritmo Guloso)
    
// Quantas notas de 100 cabem?
let notas100 = Math.floor(valorSaque / 100);
let valor = valorSaque % 100; // Atualiza o valor com o que sobrou

// Quantas notas de 50 cabem no que sobrou?
let notas50 = Math.floor(valor / 50);
valor = valor % 50;

// Quantas notas de 20 cabem no que sobrou?
let notas20 = Math.floor(valor / 20);
valor = valor % 20;

// Quantas notas de 10 cabem no que sobrou?
let notas10 = Math.floor(valor / 10);

// 4. Saída de dados (Exibe apenas as notas que serão entregues)
console.log("Cédulas entregues:");
if (notas100 > 0) console.log(`-> ${notas100} x R$ 100`);
if (notas50 > 0)  console.log(`-> ${notas50} x R$ 50`);
if (notas20 > 0)  console.log(`-> ${notas20} x R$ 20`);
if (notas10 > 0)  console.log(`-> ${notas10} x R$ 10`);
console.log("=====================================");

// 7. Faça um programa que funcione como uma calculadora básica. Leia dois
// números e uma operação desejada (+, -, *, /). Usando switch case, realize a
// operação correspondente e exiba o resultado. Trate o caso de divisão por zero e
// de operação inválida.

let val1 = parseFloat(prompt('Entre com o primeiro valor: '))
let val2 = parseFloat(prompt('Entre com o segundo valor: '))
let op = prompt('Entre com a operação desejada (+,-,* ou /): ')
let resultado

switch (op) {
    case '+':
        resultado = val1 + val2
        console.log('Resultado da soma: ' + resultado.toFixed(2))
        break
    case '-':
        resultado = val1 - val2
        console.log('Resultado da subtração: ' + resultado.toFixed(2))
        break
    case '*':
        resultado = val * val2
        console.log('Resultado da multiplicação: ' + resultado.toFixed(2))
        break
    case '/':
        if (val2 != 0) {
            resultado = val1 / val2
            console.log('Resultado da divisão: ' + resultado.toFixed(2))
        }
        else {
            console.error('Divisão por zero!')
        }
        break
    default:
        console.error('Operação inválida!')
}

// 8. Uma pizzaria cobra por tamanho e tipo de borda. Faça um programa que leia o
// tamanho da pizza(P, M ou G) e o tipo de borda(tradicional ou recheada) usando switch case.
// Os preços base são: P = R$ 25,00, M = R$ 35,00, G = R$ 45,00.A borda
// recheada acrescenta R$ 8,00 em qualquer tamanho. Exiba o valor total do pedido

let tamanhoPizza = prompt('Entre com o tamanho da pizza desejado: P, M ou G ')
let tipoBorda = prompt('Entre com o tipo de borda desejado: (tradicional ou recheada) ')
let precoPizza

switch (tamanhoPizza) {
    case 'P':
        precoPizza = 25
        if (tipoBorda === 'recheada') {
            precoPizza += 8
        }
        console.log('Valor total do pedido: R$' + precoPizza)
        break
    case 'M':
        precoPizza = 35
        if (tipoBorda === 'recheada') {
            precoPizza += 8
        }
        console.log('Valor total do pedido: R$' + precoPizza)
        break
    case 'G':
        precoPizza = 45
        if (tipoBorda === 'recheada') {
            precoPizza += 8
        }
        console.log('Valor total do pedido: R$' + precoPizza)
        break
    default:
        console.error('Entrada inválida!')
        break
}

// 9. Crie um programa que leia o número do mês (1 a 12) e, usando switch case, exiba
// o nome do mês correspondente e quantos dias ele possui. Para fevereiro,
// pergunte ao usuário se o ano é bissexto e ajuste a quantidade de dias para 29
// caso seja.

let mes = Number(prompt('Entre com o mês (1-12): '))

switch (mes) {
    case 1:
        console.log('Mês informado: Janeiro. Tem 31 dias.')
        break
    case 2:
        let bissexto = Number(prompt('O ano é bissexto? (0 - não, 1 - sim) '))
        if (bissexto) {
            console.log('Fevereiro tem 29 dias, pois o ano é bissexto.')
        }
        else {
            console.log('Fevereiro tem 28 dias, pois o ano não é bissexto.')
        }
        break
    case 3:
        console.log('Mês informado: Março. Tem 31 dias.')
        break
    case 4:
        console.log('Mês informado: Abril. Tem 30 dias.')
        break
    case 5:
        console.log('Mês informado: Janeiro. Tem 31 dias.')
        break
    case 6:
        console.log('Mês informado: Abril. Tem 30 dias.')
        break
    case 7:
        console.log('Mês informado: Janeiro. Tem 31 dias.')
        break
    case 8:
        console.log('Mês informado: Janeiro. Tem 31 dias.')
        break
    case 9:
        console.log('Mês informado: Abril. Tem 30 dias.')
        break
    case 10:
        console.log('Mês informado: Janeiro. Tem 31 dias.')
        break
    case 11:
        console.log('Mês informado: Abril. Tem 30 dias.')
        break
    case 12:
        console.log('Mês informado: Janeiro. Tem 31 dias.')
        break
    default:
}

// 10. Um estacionamento cobra por faixas de tempo. Faça um programa que leia
// quantas horas um veículo ficou estacionado e, usando switch case com
// intervalos, calcule o valor a pagar conforme a tabela: 1ª hora = R$ 8,00; 2ª hora =
// R$ 6,00; 3ª hora = R$ 4,00; acima de 3 horas = R$ 4,00 pelas primeiras 3 horas mais
// R$ 2,00 por hora adicional. Exiba o tempo total e o valor cobrado.

let tempoHoras = Number(prompt('Entre com o número de horas que o veículo ficou estacionado: '))

switch (true) {
    case (tempoHoras === 1):
        console.log('Tempo total: ' + tempoHoras + ' hora. Valor a pagar: R$ 8')
        break
    case (tempoHoras === 2):
        console.log('Tempo total: ' + tempoHoras + ' horas. Valor a pagar: R$ 14')
        break
    case (tempoHoras === 3):
        console.log('Tempo total: ' + tempoHoras + ' horas. Valor a pagar: R$ 18')
        break
    case (tempoHoras > 3):
        valorAPagar = 4
        horasRem = tempoHoras - 3
        valorAPagar = valorAPagar + (horasRem * 2)
        console.log('Tempo total: ' + tempoHoras + ' horas. Valor a pagar: R$ ' + valorAPagar)
        break
}
