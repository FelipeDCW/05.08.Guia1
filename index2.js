const express = require('express')
const app = express()

app.use(express.static("public"))

app.get("/", (req, res) => {   
    res.send()
    res.sendFile(__dirname__ + '/index.html')
}) 

app.listen(4000,()=>{
    console.log('Escuchando por el 4000');
})