var express = require('express');
var auth = require('./auth');
var router = express.Router();

// register registration menu
router.post('/api/v1/register',auth.register);
router.post('/api/v1/login',auth.login);


module.exports = router;