// config inicial

const express = require('express')
const mongoose = require('mongoose')
const { log } = require('node:console')
const app = express()

// forma de ler JSON / middlewares

app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json())

// rotas da API

const personRoutes = require('./routes/personRoutes')

app.use('/person', personRoutes)

// rota inicial / endpoint

app.get('/', (req, res) => {

    // mostrar req

    res.json({ message: 'Oi Express!' })

})

// entregar uma porta

const DB_USER = 'pedropedroka130608_db_user'
const DB_PASSWORD = encodeURIComponent('Lrva313zq0Db2eSO')

mongoose
.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.phvebdf.mongodb.net/?appName=Cluster0`)
.then(() => {
        console.log("Conectamos ao MongoDB")
        app.listen(3000)
})
.catch((err) => console.log(err, 'deu erro'))