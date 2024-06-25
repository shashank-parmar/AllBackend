const express = require('express')
const {handlerNewGenrateURL} = require('../controller/url')

const router = express.Router();

router.post('/', handlerNewGenrateURL)

module.exports = router