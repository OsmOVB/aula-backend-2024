console.log("Ola mundo")

let teste = 10;
var nome = "Igor" // nao usamos
const ehPar = true

teste = 12;

teste = "ola mundo"

console.log(teste)
console.log(nome)
console.log(ehPar)

console.log(2 + 2)
console.log(3 * 2)
console.log(10 / 2)
console.log(8 - 3)
console.log(5 % 2) // 1
console.log(parseInt(5 / 2))
console.log(3 ** 2) // 9

console.log("\n\nTabela verdade &&")
console.log(true && true) // true
console.log(true && false) // false
console.log(false && true) // false
console.log(false && false) // false

console.log("\n\nTabela verdade ||")
console.log(true || true) // true
console.log(true || false) // true
console.log(false || true) // true
console.log(false || false) // false

console.log("\n\nComparações")
console.log(1 == 1) // true
console.log(1 == '1') // true
console.log(1 === '1') // false
console.log(1 === 1) // true
console.log(1 != 2) // true
console.log(1 != '1') // false
console.log(1 !== '1') // true
console.log(1 !== 2) // true
console.log(1 !== 1) // false
console.log(1 < 2)
console.log(1 <= 1)
console.log(2 >= 1)

let idade = 17
if (idade > 18) {
    console.log("Maior de idade")
} else if (idade === 18) {
    console.log("Igual a 18")
} else {
    console.log("Menor de idade")
}

const code = 1
switch (code) {
    case 1:
        console.log("Ligar tv")
        break
    case 2:
        console.log("Desligar tv")
        break
    default:
        console.log("Sei lá")
}

for (let i = 0; i < 10; i++) {
    console.log(i)
}

// i++ // -> i += 1 -> i = i + 1
// i-- // -> i -= 1 -> i = i - 1
// -> i /= 2 -> i = i / 2

let i = 10;
while (i < 30) {
    console.log(i)
    i *= 2 // i = i * 2
}

function calc(a, b) {
    return a + b
}

const result = calc(2, 1)
console.log(result)