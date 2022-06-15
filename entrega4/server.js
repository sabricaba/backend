const express = require('express');
const rutas = require('./api');

const app = express()
const puerto = 8080

app.use(express.json()) 
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.use('/api', rutas)

app.listen(puerto, function(err){
    if (err) console.log(err)
    console.log(`Servidor escuchando el puerto: ${puerto}`)
})
    