const express = require('express')
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.json())

const db = require('./config')

db.sequelize.sync();



app.listen(1000)