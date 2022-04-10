const express = require('express')
const { findOutlet } = require('../controllers.js/outlet')
const router = express.Router()

router.get('/find',findOutlet)

module.exports = router