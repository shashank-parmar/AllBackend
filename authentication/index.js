const express = require('express')
const createError = require('http-errors')
const morgan = require('morgan')
require('dotenv').config()


const app = express();



const PORT = process.env.PORT;


app.listen(PORT)