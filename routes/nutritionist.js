var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('nutritionist/index', { title: 'Nutricionista' });
});

module.exports = router;