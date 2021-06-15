var express = require('express');
var auth = require('./auth');
var router = express.Router();
var verification = require('./verification');

// register registration menu
router.post('/api/v1/register',auth.register);
router.post('/api/v1/login',auth.login);

//address that needs authorization
router.get('/api/v1/secret',verification(),auth.secretpage);

module.exports = router;