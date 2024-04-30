const soma = (n1, n2, successCb, errorCb) => {
    const result = n1 + n2;
    if (result % 2 === 0) return successCb(result)
    errorCb(result)
}

const ehPar = (n) => {
    console.log(`o numero ${n} é par`)
}

const ehImpar = (n) => {
    console.log(`o numero ${n} é impar`)
}

// soma(2, 3, ehPar, ehImpar)


const somaPromise = (n1, n2) => {
    return new Promise((successCb, errorCb) => {
        const result = n1 + n2;
        if (result % 2 === 0) return successCb(result)
        errorCb(result)
    })
}

// somaPromise(2, 1).then(ehPar).catch(ehImpar)
// somaPromise(2, 6).then(ehPar).catch(ehImpar)

const { join } = require("path")
// import path from "path"

const imgSrc = join("./images", "/group1/teste.png")
console.log(imgSrc)
console.log(join(__dirname, "./images", "/group1/teste.png"))

const pessoa = {
    nome: "Igor"
}

const nome = "teste"
// destructor obj
const { nome: nomePessoa } = pessoa

console.log(nome)

// destructor array
const arr = [1, 2, 3]
const [e1, ...resto] = arr

console.log(resto)

const { duplicarNumero } = require("./utils")

console.log(duplicarNumero(10))

// npm -> node package manager