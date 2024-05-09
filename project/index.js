const express = require("express")
const { router: movieRouter } = require("./routes/movies")
const { router: userRouter } = require('./routes/user')

const server = express()
server.use(express.json())
server.use((req, res, next) => {
    console.log(req.url)
    console.log(req.method)
    console.log(req.body)
    next()
})

server.get("/health", (req, res) => {
    res.json({
        status: "Running"
    })
})

server.use("/api", movieRouter)
server.use("/api", userRouter)

const port = 8080
server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})