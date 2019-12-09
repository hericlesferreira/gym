var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('client/index', { title: 'Cliente' });
});

module.exports = router;