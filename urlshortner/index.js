const express = require('express')
const mongoose = require('mongoose')
const {connectToMongo} = require('./connect')
const urlRoute = require('./routes/url')
const app = express();


connectToMongo()
app.use(express.json())
app.use('/url',urlRoute)

app.listen(7000);