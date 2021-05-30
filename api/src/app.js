const express = require('express')
const users = require('./api/user/controller')
const auth = require('./api/user/auth')

const app = express()
app.use(express.json());
app.get("/ping",(req,res)=>res.status(200).send('pong'))
app.use('/users',users)
app.use('/auth',auth)

module.exports = app