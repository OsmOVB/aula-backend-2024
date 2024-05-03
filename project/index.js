const express = require("express")
const server = express()

// http://127.0.0.1:8080 ou http://localhost:8080
server.get("/", (req, res) => {
    res.send("hello world")
})

server.get("/user/:id", (req, res) => {
    res.json({
        id: req.params.id,
        name: "Igor",
        email: "igor@test.com",
    })
})

// http://localhost:8080/user
server.get("/user", (req, res) => {
    res.json({
        name: "Igor",
        email: "igor@test.com",
    })
})

const port = 8080
server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})