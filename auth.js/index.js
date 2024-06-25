require('dotenv').config();     
const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const app = express();
app.use(express.json())
const userRoute = require('./router/user')



app.listen(4000);