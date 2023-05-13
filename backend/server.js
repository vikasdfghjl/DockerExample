const express = require("express")
const PORT = 3000;

const app = express()

app.get('/', (req,res) => {
    res.send("Welcome Vikas to Docker Example Node App!!!")
})

app.listen(PORT, (req,res) => {
    console.log(`Listening on PORT ${PORT}`)
})