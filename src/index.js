const { response } = require('express')
const express = require('express')

const app = express()

const porta = 3333

app.get("/", (req, res) => {
    return res.send("Hello World")
})

app.get("/ignite", (req, res) => {
    return res.json({message: "Hello world ignite!"})
})


//comando utilizado para iniciar a aplicação
app.listen(porta)

