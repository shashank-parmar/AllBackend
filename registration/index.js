const express = require("express")
const bodyParser = require('body-parser')
const { addUser } = require('./controller/registrationcontroller')
const { login } = require('./controller/login')
const app = express();

require('./models/index')

app.use(bodyParser.json())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.post('/registration',addUser)
app.post('/login',login)


app.listen(7070)