const express = require("express")
const bodyParser = require("body-parser")
const { addUser,logIn,resetPass,deleteUser } = require('./controller/user')
const { sendmail,verify } = require('./controller/sendmail')
const { Orderbook,viewrelation } = require('./controller/book')
require('./models/index')

const app = express();
app.use(bodyParser.json())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.post('/createUser',addUser)
app.post('/login',logIn)
app.post('/resetPass',resetPass)
app.delete('/deleteUser/:id',deleteUser)

app.get('/sendmail/:id',sendmail)
app.get('/verify/:id',verify)

app.post('/addbook',Orderbook)
app.get('/viewrelation',viewrelation)

app.listen(9000)