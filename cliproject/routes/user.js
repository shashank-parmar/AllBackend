const express = require('express')
const user = require('../controller/user')
const router = express.Router();
const path = require('path')

router.post('/create',user.ins);

exports.router = router;
