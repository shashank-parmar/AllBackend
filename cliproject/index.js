const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userroute = require('./routes/user')
const emproute = require('./routes/employee')
require('./model/index');

app.use(bodyParser.json())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/users', userroute.router);
app.use('/employee', emproute.router);


app.listen(9999);