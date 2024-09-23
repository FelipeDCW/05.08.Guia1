const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json());

app.get('/',(req,res)=>{

    res.json('GET LISTO')
})

app.get('/usuario/:nombre',(req,res)=>{
    const nombre = req.params.nombre; 
    const arreglo = nombre.match(/^[aeiouAEIOU]/) 
    if(arreglo  === null ){
        res.send("No, tu nombre no empieza con una vocal")        
    }
    else{
        res.send("Si, tu nombre empieza con una vocal")
    }    
})


app.get('/musica',(req,res)=>{
    /* res.send ('https://open.spotify.com/intl-es') ;     */
    res.redirect("https://www.spotify.com/cl/")
})

app.use("/colores/:color", (req, res, next) => { 
    const { color } = req.params; 
    console.log(color);
    if (color === "azul") {
        res.send("azulado")
    } 
    else{
        res.send(`El color es: ${color}`)
    }
    
})

app.listen(3000)
