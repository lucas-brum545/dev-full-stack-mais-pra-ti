console.log("Hello, world!")


/*
let val1 = 13
let val2 = 20

console.log("Media dos valores: ",(val1+val2)/2)


let idade = "oi"

if (Number(idade)) {
    if (idade >= 18) {
        console.log("Você já pode tirar a CNH.")
    } else if ((idade < 18) && (idade > 0)) {
        console.log("Você ainda não pode tirar a CNH.")
    }
}
else {
    console.log("Idade inválida.")
}
*/
const prompt = require('prompt-sync')();

let nome = prompt("Digite seu nome: ")
console.log("Olá, " + nome + "! Seja bem-vindo(a) ao curso de JavaScript!")