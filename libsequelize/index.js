const express = require('express')
const { addstudent } = require('./controller/studentcntroller')
const { addbook } = require('./controller/bookcontroller')
const { addOrders, viewOrders } = require('./controller/ordercontroller')
const bodyParser = require('body-parser');
const app = express();

require('./models/index')
app.use(bodyParser.json());
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.post('/create-student', addstudent)
app.post('/add-book', addbook)
app.post('/addorder', addOrders)
app.get('/getdata', viewOrders)

app.listen(9090)
