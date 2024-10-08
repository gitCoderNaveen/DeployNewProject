const express = require('express')
const datas = require('./Route/data')
const mongoose = require('mongoose')
const dataModel = require('./Model/data-model')
const cors = require('cors')

const app = express()

app.use(cors({
    origin:"https://66bb992da9b1db8360f8c7b9--superb-hamster-163744.netlify.app"
}
))

mongoose.connect('mongodb+srv://deployUser:Welcome123@newcluster.8zvx9.mongodb.net/ProductDirectory?retryWrites=true&w=majority&appName=NewCluster')

mongoose.connection.on('connected', ()=>{
    console.log('MongoDB successfully connectd')
})

app.use('/datas',datas)

app.get('/',(req, res)=>{
    res.json('hello')
})

app.use(express.json())

app.listen(7002, ()=>{
    console.log('sever is running on port 7002')
})
