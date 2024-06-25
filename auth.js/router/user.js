const express = require('express');
const controll = require('../controller/user')
const route = express.Router();

app.use('/api',route)

route.post('/',controll.handleUserCreate)
route.get('/signup',controll.html)

module.exports = route;