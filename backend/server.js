const express = require("express")
const PORT = 3000;

const app = express()

app.get('/', (req,res) => {
    res.send("This is an Example of jenkins, Docker, and Github By Vikas Singh")
})

app.listen(PORT, (req,res) => {
    console.log(`Listening on PORT ${PORT}`)
})