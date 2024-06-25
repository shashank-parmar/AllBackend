const express = require('express')
const employee = require('../controller/employee')
const router = express.Router();
const path = require('path')

router.post('/createemp',employee.emp);
router.get('/getdataa',employee.getdata);

exports.router = router;
