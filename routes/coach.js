var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('coach/index', { title: 'Personal', userType: 2 });
});

router.get('/login', function(req, res, next){
    res.render('login', { title: 'Login', userType: 'Professor' });
});

module.exports = router;