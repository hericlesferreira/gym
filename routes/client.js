var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('client/index', { title: 'Cliente' });
});

router.get('/login', function(req, res, next){
    res.render('login', { title: 'Login', userType: 'Aluno' });
});

module.exports = router;