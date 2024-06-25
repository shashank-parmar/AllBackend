const express = require('express')
const user = require('../controller/user')
const route = express.Router();


route.post('/create',user.ins);

exports.route = route;
