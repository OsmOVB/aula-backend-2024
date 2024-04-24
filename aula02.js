const soma = function (a, b) {
    return a + b
}

console.log(soma(2, 3))

const sub = (a, b) => {
    return a - b
}

console.log(sub(5, 3))

const ehPar = (n) => n % 2 === 0

const quadrado = (n) => n ** 2

const idade = 18
if (idade >= 18) {
    console.log("Maior de idade")
}

const teste = () => {
    const idade = 18
    let f = false
    if (idade >= 18) {
        var ehMaior = true
        let t = true
        f = true
    }
    console.log(ehMaior) // true
    console.log(f) // true
    // console.log(t) // quebra.. t não foi definido
}

teste()

console.log("arrays")

const notas = [10, 6, 4, 8, 6, 8, 10, 10]

console.log(notas)

notas.push(9)

console.log(notas)
notas.pop()
notas.pop()
notas.pop()

console.log(notas)


notas.unshift(0)
console.log(notas)
notas.shift()
notas.shift()
console.log(notas)

for (let i = 0; i < notas.length; i++) {
    console.log(notas[i])
}

console.log("-----")

for (let nota of notas) {
    console.log(nota)
}

console.log("-----")

notas.forEach((nota, idx, arr) => {
    console.log(nota, idx, arr)
})

const novasNotas = notas.map((nota) => {
    return nota / 2
})

const map = (arr, callback) => {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(callback(arr[i], i, arr))
    }
    return newArr
}

console.log(notas)
console.log(novasNotas)
console.log(map(notas, (e) => e / 2))
console.log(map(notas, (e) => e + 2))
console.log(map(notas, (e) => e - 2))
console.log(map(notas, (e) => e * 2))

console.log([1, 2, 3, 4, 5].includes(10))

const aluno = {
    nome: "John",
    sobrenome: "Doo",
    age: 20,
    ce: 0.8,
    notas: [10, 8, 5, 8],
    getFullName: function () {
        return (this.nome + " " + this.sobrenome)
    }
}

console.log(aluno.notas
    .map(nota => nota * 2)
    .filter(nota => nota > 15)
    .map(nota => nota / 2)
    .reverse())


const objComplexo = {
    nome: "teste",
    obj: {
        array: [
            {
                teste: {
                    array: [2]
                }
            }
        ]
    }
}

console.log("--->", objComplexo.obj.array[0].teste.array[0])

console.log(undefined)
console.log(null)

// 0
// undefined
// null
// NaN
// ''

console.log(!!(0))
console.log(!!(undefined))
console.log(!!(null))
console.log(!!(NaN))
console.log(!!(''))
console.log(!!('Ola mundo'))

const t = 10
if (t) {
    console.log("entrei")
}

console.log(!!10)
console.log(!false)

console.log(aluno["nome"])

const getKeyValue = (obj, key) => obj[key]

console.log(getKeyValue(aluno, "nome"))


