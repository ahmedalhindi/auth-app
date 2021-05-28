const express = require('express')

const app = express()

app.get("/ping",(req,res)=>res.status(200).send('pong'))

module.exports = app