var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('client/index', { title: 'Cliente', userType: 1 });
});

router.get('/login', function(req, res, next){
    res.render('login', { title: 'Login', userType: 'Aluno' });
});



module.exports = router;