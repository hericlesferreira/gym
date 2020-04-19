var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('nutritionist/index', { title: 'Nutricionista', userType: 3  });
});

router.get('/login', function(req, res, next){
    res.render('login', { title: 'Login', userType: 'Nutri' });
});

module.exports = router;