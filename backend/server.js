const express = require("express")
const PORT = 3000;

const app = express()

app.get('/', (req,res) => {
    res.send("Welcome to Docker Example!!!")
})

app.listen(PORT, (req,res) => {
    console.log(`Listening on PORT ${PORT}`)
})